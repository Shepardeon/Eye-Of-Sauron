export function useBuildUtils() {
  return {
    isDev: () => process.env.NODE_ENV === 'development',
  }
}
