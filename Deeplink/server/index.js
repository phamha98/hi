const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Phục vụ file assetlinks.json cho Android
app.use("/.well-known", express.static(path.join(__dirname, ".well-known")));

// Phục vụ file apple-app-site-association cho iOS (không có đuôi .json)
app.get("/.well-known/apple-app-site-association", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.sendFile(path.join(__dirname, ".well-known", "apple-app-site-association"));
});

// Kiểm tra server


app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Info</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                h1 { color: #333; }
                p { color: #666; }
            </style>
        </head>
        <body>
            <a href="rocketchat://open" id="open-app">Mở Rocket.Chat</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <a href="qsland://open" id="open-app">Mở QSLAND</a>
            <h1>Hello</h1>
            <p>Phiên bản: 2.0.0</p>
            <p>${new Date().toISOString()}</p>
            <p>API AASA: <a href="/apple" target="_blank">Xem JSON</a></p>
            <script>
            window.onload = function() {
                // window.location.href = "rocketchat://open";
                window.location.href = "qsland://open";
            };
            </script>
        </body>
        </html>
    `);
});
// Khởi động server
app.listen(PORT, () => {
    console.log(`\x1b[32mServer đang chạy tại http://localhost:${PORT}`);
});
