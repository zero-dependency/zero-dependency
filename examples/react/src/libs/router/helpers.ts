export function createUrlWithOrigin(path: string): URL {
  return new URL(path, location.origin)
}
