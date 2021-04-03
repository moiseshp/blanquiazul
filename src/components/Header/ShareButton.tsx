import { IconButton } from '@material-ui/core'
import { ShareOutlined as ShareOutlinedIcon } from '@material-ui/icons'
const ShareButton = () => {

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Personaliza LA PIEL Blanquiazul 2021 con tu nombre y número. Selecciona tu color de fondo favorito, versión de camiseta y mucho más.',
        url: window.location.href
      })
      .then(() => {
        // console.log('Thanks for sharing!');
      })
      .catch(console.error)
    }
  }

  return (
    <IconButton
      color="inherit"
      onClick={handleShare}
    >
      <ShareOutlinedIcon />
    </IconButton>
  )
}

export default ShareButton
