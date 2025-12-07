import { app, BrowserWindow } from 'electron'
import path from 'path'
import { useBuildUtils } from './utils/buildUtils.js'

const { isDev, getPreloadPath } = useBuildUtils()

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  })

  if (isDev()) {
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-vue/index.html'))
  }
})
