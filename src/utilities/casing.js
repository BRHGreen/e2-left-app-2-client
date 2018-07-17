export const convertCasing = (string) => {
  return string.replace(/-([a-z])/g, g => g[1].toUpperCase())
}

export const camelCaseToDash = (string) => {
  return string.toString().replace(/([A-Z])/g, (g) => `-${ g[0].toLowerCase() }`);
}
