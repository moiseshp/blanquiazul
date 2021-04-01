export const downloadLink = (data: string, type: string): void => {
  const link = document.createElement('a')
  link.download = filename(type)
  link.href = data
  link.click()
}

const filename = (type: string) => {
  const date = new Date()
  return `2021--LA-PIEL--${date.getTime()}.${type}`
}
