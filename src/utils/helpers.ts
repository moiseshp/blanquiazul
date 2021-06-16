import html2canvas from 'html2canvas'

export const downloadLink = (data: string, type: string): void => {
  const a = document.createElement('a')
  const date = new Date()
  a.download = `BLANQUIAZUL-COM--${date.getTime()}.${type}`
  a.href = data
  a.click()
}

export const htmlToImage = async (refNode: any) => {
  const scale = 3
  if (refNode) {
    const options = {
      scale,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      width: window.outerWidth,
      height: window.outerHeight,
      windowWidth: window.outerWidth,
      windowHeight: window.outerHeight,
    }
    return await 
      html2canvas(refNode, options)
        .then((response) => {
          const image = response.toDataURL('image/jpeg')
          downloadLink(image, 'jpeg')
        })
  }
}

