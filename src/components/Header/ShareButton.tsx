import IconButton from '@material-ui/core/IconButton'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
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
