import React from 'react'
import { AppBar, Box, Button, CircularProgress, Hidden } from '@material-ui/core'
import AspectRatio from './AspectRatio'
import { downloadLink, scaleImageTo } from 'utils/helpers'
import domtoimage from 'dom-to-image'


const Header = ({ htmlDivElementRef }: any) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const handleSaveImage = () => {
    setLoading(true)
    domtoimage.toPng(htmlDivElementRef.current, scaleImageTo(3, htmlDivElementRef.current))
      .then((data: string) => {
        downloadLink(data, 'png')
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box p={2}>
        <Hidden smDown>
          <Box pb={1}>
            <AspectRatio />
          </Box>
        </Hidden>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          onClick={handleSaveImage}
          disabled={loading}
        >
          {loading ? (<CircularProgress size={28} />) : 'Guardar imagen'}
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header
