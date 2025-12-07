import { app } from 'electron'
import path from 'path'

export function useBuildUtils() {
  function isDev() {
    return process.env.NODE_ENV === 'development'
  }

  function getPreloadPath() {
    return path.join(
      app.getAppPath(),
      isDev() ? '.' : '..',
      '/dist-electron/preload.cjs'
    )
  }

  return {
    isDev,
    getPreloadPath,
  }
}
