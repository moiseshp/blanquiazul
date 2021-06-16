import React from 'react'
import { AppBar, Box, Button, CircularProgress, Divider, Hidden } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import { htmlToImage } from 'utils/helpers'

type TProps = {
  refCanvasElement: React.RefObject<HTMLElement>
}

const Footer = ({ refCanvasElement }: TProps) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const handleDownload = () => {
    window.scrollTo(0, 0)
    const refNode = refCanvasElement.current
    setLoading(true)
    htmlToImage(refNode)
      .then(() => setLoading(false))
  }

  return (
    <Hidden xsDown>
      <AppBar position="static" color="transparent" elevation={0}>
        <Divider />
        <Box py={2} px={3}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            startIcon={<GetAppIcon />}
            disabled={loading}
            onClick={handleDownload}
          >
            {loading ? (<CircularProgress size={28} />) : ('Descargar')}
          </Button>
        </Box>
      </AppBar>
    </Hidden>
  )
}

export default Footer