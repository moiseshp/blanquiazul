export const downloadLink = (data: string, type: string): void => {
  const link = document.createElement('a')
  link.download = filename(type)
  link.href = data
  link.click()
}

export const scaleImageTo = (scale: number, node: any) => ({
  height: node.offsetHeight * scale,
  width: node.offsetWidth * scale,
  style: {
    '-webkit-transform': `scale(${scale})`,
    // transform: `scale(${scale})`,
    // '-ms-transform': `scale(${scale}, ${scale})`,
    // '-moz-transform': `scale(${scale}, ${scale})`,
    // '-o-transform': `scale(${scale}, ${scale})`,
    '-webkit-transform-origin': 'top left',
    transformOrigin: 'top left',
    width: `${node.offsetWidth}px`,
    height: `${node.offsetHeight}px`
  }
})

const filename = (type: string) => {
  const date = new Date()
  return `2021--LA-PIEL--${date.getTime()}.${type}`
}
