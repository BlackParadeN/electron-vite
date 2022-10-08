const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    echo: (msg) => ipcRenderer.invoke('echo', msg)
})