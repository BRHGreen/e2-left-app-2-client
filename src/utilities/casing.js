export const convertCasing = (string) => {
  return string.replace(/-([a-z])/g, g => g[1].toUpperCase())
}