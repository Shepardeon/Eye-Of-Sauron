import { app, BrowserWindow } from 'electron'
import path from 'path'

type test = string

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({})

  mainWindow.loadFile(path.join(app.getAppPath(), '/dist-vue/index.html'))
})
