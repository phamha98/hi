# 🚀 vscode
## Change color terminal vscode
```json
"workbench.colorCustomizations" : {
    "terminal.foreground" : "#fff",
    "terminal.background" : "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff",
}
```

```json
{
  "workbench.colorCustomizations": {
    //terminal
    "terminal.foreground": "#fff",
    "terminal.background": "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff",
    //editer
    "editor.selectionBackground": "#f3bf95", //Màu của lựa chọn trình chỉnh sửa.
    "editor.selectionForeground": "#629942", //Màu của văn bản đã chọn để có độ tương phản cao.
    "editor.wordHighlightBackground": "#b7f395", //Màu nền của biến dùng***
    //find
    "editor.findMatchBackground": "#a692db", //Màu của kết quả tìm kiếm hiện tại.
    "editor.findMatchHighlightBackground": "#c2c4c1", //Màu của kết quả tìm kiếm.

    "editorCursor.foreground": "#ff0000", //Màu của con trỏ soạn thảo.
    "editorCursor.background": "#09ff00", //Màu nền của con trỏ soạn thảo.
    "editor.background": "#f3f2f2f5", //mau nen
    "editor.lineHighlightBackground": "#cacac4", //mau dong con tro

    // "editor.lineHighlightBorder": "#64f802", //mau border con tro
    // "editorLineNumber.foreground": "#345a25", //Màu của số dòng trình chỉnh sửa hiện tai.
    // "editorLineNumber.activeForeground": "#ee1c00", //Màu của số dòng trình soạn thảo.
    //thanh
    // "activityBar.background": "#030303", //mau thanh goc trai
    // "sideBar.background": "#dfdede", //mau thanh goc canh trai
    // "sideBar.border": "#030303", //mau border trai  editor

    // "window.activeBorder": "#ff0000", //border khung chon van ban
    //chonfile
    "list.activeSelectionBackground": "#686868", //mau nen file dang chon
    "list.activeSelectionForeground": "#fff", //mau chu file dang chon
    // "list.activeSelectionIconForeground":"#3cbe14",//mau mui ten file dang chon
    // "list.focusOutline":"#ff0000",//mau border file dang chon
    //hover chuot
    "list.hoverBackground": "#686868", //mau bg file di chuot
    "list.hoverForeground": "#ffffff" //mau fg file di chuot
    // "editor.hoverHighlightBackground":"#9da1a1",//Đánh dấu bên dưới từ mà di chuột được hiển thị.

    // "editor.selectionHighlightBackground": "#c6c9ca",
    // "window.inactiveBorder": "#33ff00",
  }
}
```
```json
"editor.tokenColorCustomizations": {
        "comments": "#058b01"
    },
```
## 🚀 tip
```
ctrl+p @
@
@:
https://code.visualstudio.com/docs/getstarted/tips-and-tricks
```
```json
{
  "workbench.colorCustomizations": {
    "terminal.foreground": "#fff",
    "terminal.background": "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff"
  }
}
```
### 🔴 Auto Reveal in Explorer View (Vscode)
```json
{
"explorer.autoReveal": true,
  "explorer.autoRevealExclude": {
    "**/node_modules": false,
    "**/bower_components": false
  },
}
```