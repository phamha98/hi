const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { Client } = require('ssh2');
const path = require('path');
const fs = require('fs');
const axios = require('axios'); // Sử dụng để gửi HTTP request

let sshClient = null;
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Nếu cần preload file
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.webContents.openDevTools();
    // Load giao diện chính
    mainWindow.loadFile('index.html');

    // Mở DevTools

};

// Sự kiện khi Electron đã sẵn sàng
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Đóng ứng dụng khi tất cả cửa sổ bị đóng
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('start-ssh-stream', async (event, { pem, host, port, pemFilePath, username }) => {
    console.log('pemFilePath', pemFilePath)


    event.sender.send('ssh-state', { data: `connecting ${host}:${port}` });

    if (sshClient) {
        console.log('Using existing SSH session');
        event.sender.send('ssh-state', { data: 'Using existing SSH session' });
    }
    else {
        sshClient = new Client();
        const privateKeyPath = pemFilePath ?? path.join(__dirname, pem);

        sshClient.on('ready', () => {
            console.log('ready')
            event.sender.send('ssh-state', { data: 'ready' });
            // sshClient.exec('sudo -i', (err, stream) => {
            //     if (err) {
            //         console.error('Error executing sudo -i:', err);
            //         event.sender.send('ssh-state', { data: 'err' +err});
            //         reject(err);
            //     } else {
            // event.sender.send('ssh-state', { data: 'sudo -i' });
            sshClient.exec('pwd', (err, stream) => {
                if (err) {
                    reject(err);
                } else {
                    let output = '';
                    stream.on('data', (data) => {
                        output += data.toString();

                    }).on('close', () => {
                        console.log('ssh-pwd', JSON.stringify(output));
                        event.sender.send('ssh-pwd', { data: output.replace('\n', '') });
                    });
                }
            });
            sshClient.exec('ls -la', (err, stream) => {
                if (err) {
                    reject(err);
                } else {

                    let output = '';
                    stream.on('data', (data) => {
                        output += data.toString();

                    }).on('close', () => {
                        console.log('output', output);
                        const parsedData = parseLsOutputJA(output);
                        console.log('Parsed Data:', parsedData);
                        event.sender.send('ssh-data', { data: parsedData });
                        // ssh.end();
                    });
                }
            });
            // }
            // })
        })
            .on('error', (err) => { reject(err) })
            .connect({
                host: host,
                port: port,
                username: username,
                privateKey: fs.readFileSync(privateKeyPath),
            });
    }
});

ipcMain.on('read-file', async (event, { filePath }) => {
    if (!sshClient) {
        event.sender.send('ssh-state', { error: 'No active SSH session' });
        return;
    }

    // Đọc file nếu SSH client đã kết nối
    sshClient.exec(`cat ${filePath}`, (err, stream) => {
        if (err) {
            event.sender.send('ssh-state', { error: err.message });
            return;
        }

        let output = '';
        stream.on('data', (data) => {
            output += data.toString();
        }).on('close', () => {
            console.log('File Content:', output);
            event.sender.send('ssh-data', { data: output });
        });
    });
});
ipcMain.on('read-folder', async (event, { folderPath }) => {
    console.log('read-folder', folderPath)
    event.sender.send('ssh-state', { error: 'read-folder:' + folderPath });
    if (!sshClient) {
        console.log('!sshClient', !sshClient)
        event.sender.send('ssh-state', { error: 'No active SSH session' });
        return;
    }
    // Thực thi lệnh `ls -la` trên thư mục
    console.log(`ls -la ${folderPath}`)
    sshClient.exec(`ls -la ${folderPath}`, (err, stream) => {
        if (err) {
            event.sender.send('ssh-state', { error: err.message });
            return;
        }

        let output = '';
        stream.on('data', (data) => {
            output += data.toString();
        }).on('close', () => {
            console.log('Folder Content:', output);
            const parsedData = parseLsOutputJA(output);  // Hàm để phân tích dữ liệu
            console.log('Parsed Data:', parsedData);
            event.sender.send('ssh-data', { data: parsedData });
        });
    });
});

ipcMain.handle('select-pem-file', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'PEM Files', extensions: ['pem'] }
        ]
    });

    if (result.canceled) {
        return null;
    }
    return result.filePaths[0];
});

function parseLsOutput(output) {
    // Biểu thức chính quy để phân tích dòng kết quả `ls -la`
    const regex = /([drwx-]{10})\s+(\d+)\s+(\S+)\s+(\S+)\s+(\d+)\s+(\w{3}\s+\d+\s+\d{2}\s+\d{2}:\d{2})\s+(.+)/;

    const lines = output.split('\n');
    const result = [];

    for (const line of lines) {
        const match = line.match(regex);
        if (match) {
            result.push({
                permissions: match[1],
                links: match[2],
                owner: match[3],
                group: match[4],
                size: match[5],
                date: match[6],
                name: match[7],
            });
        }
    }

    return result;
}
function parseLsOutputJA(output) {
    // Biểu thức chính quy để phân tích dòng kết quả `ls -la` với tháng bằng tiếng Nhật
    const regex = /([drwx-]{10})\s+(\d+)\s+(\S+)\s+(\S+)\s+(\d+)\s+([0-9]{1,2}月\s+[0-9]{1,2}\s+[0-9]{4})\s+(.+)/;

    const lines = output.split('\n');
    const result = [];

    for (const line of lines) {
        const match = line.match(regex);
        if (match) {
            result.push({
                permissions: match[1],
                links: match[2],
                owner: match[3],
                group: match[4],
                size: match[5],
                date: match[6], // Ngày tháng dạng tiếng Nhật
                name: match[7],
            });
        }
    }

    return result;
}
