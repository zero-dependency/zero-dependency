export async function domReady(): Promise<void> {
  if (document.readyState == 'loading') {
    return new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', () => resolve(), {
        once: true
      })
    })
  }
}
