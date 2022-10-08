import { app, BrowserWindow, ipcMain } from "electron"

const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  });

  if (process.env.npm_lifecycle_event === "dev:main") {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile("./dist/index.html");
  }

}

app.whenReady().then(() => {
  ipcMain.handle('echo', (event, msg) => {
    console.log("from render: ", msg);
    return msg;
  })
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
