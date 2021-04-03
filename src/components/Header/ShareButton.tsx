import { IconButton } from '@material-ui/core'
import { ShareOutlined as ShareOutlinedIcon } from '@material-ui/icons'
const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: window.location.href,
        url: window.location.href
      })
      .then()
      .catch()
    }
  }

  return (
    <IconButton color="inherit" onClick={handleShare}>
      <ShareOutlinedIcon />
    </IconButton>
  )
}

export default ShareButton
