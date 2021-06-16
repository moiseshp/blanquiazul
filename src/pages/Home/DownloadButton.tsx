import React from 'react'
import { Box, CircularProgress, Fab } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import CloseIcon from '@material-ui/icons/Close'
import { useRecoilState } from 'recoil'
import { globalPreviewState } from 'store/global/atoms'
import { htmlToImage } from 'utils/helpers'
import Slide from '@material-ui/core/Slide'


type TProps = {
  refCanvasElement: React.RefObject<HTMLElement>
}

const DownloadButton = ({ refCanvasElement }: TProps) => {
  const [preview, setPreview] = useRecoilState(globalPreviewState)
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleClose = () => {
    setPreview(!preview)
  }

  const handleDownload = () => {
    const refNode = refCanvasElement.current
    setLoading(true)
    htmlToImage(refNode)
      .then(() => setLoading(false))
  }

  return (
    <Slide appear={false} direction="up" in={preview}>
      <Box 
        p={2} 
        position="fixed"
        bottom={0}
        textAlign="center"
        width="100%"
        color="white"
        zIndex={1000}
      >
        <Fab
          size="medium"
          color="primary"
          onClick={handleClose}>
          <CloseIcon />
        </Fab>
        <Box component="span" mr={1} />
        <Fab
          size="medium"
          color="secondary"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? (<CircularProgress size={28} />) : (<GetAppIcon />)}
        </Fab>
      </Box>
    </Slide>
  )
}

export default DownloadButton
