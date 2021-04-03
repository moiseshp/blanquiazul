export const downloadLink = (data: string, type: string): void => {
  const a = document.createElement('a')
  a.download = filename(type)
  a.title = process.env.REACT_APP_NAME || 'image title'
  a.href = data
  a.click()
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