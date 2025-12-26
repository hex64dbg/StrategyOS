export async function enableMocking() {
  if (import.meta.env.MODE !== 'development' || !import.meta.env.VITE_MSW_ENABLED) {
    return
  }

  const { worker } = await import('./browser')

  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}
