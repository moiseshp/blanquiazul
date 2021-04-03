import { IconButton } from '@material-ui/core'
import { ShareOutlined as ShareOutlinedIcon } from '@material-ui/icons'
const ShareButton = () => {

  const handleShare = () => {
    console.info(navigator.share)
    if (navigator.share) {
      navigator.share({
        title: 'WebShare API Demo',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      alert('Navigator...')
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
