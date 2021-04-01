import { AppBar, Box, Button, Hidden } from '@material-ui/core'
import AspectRatio from './AspectRatio'
// import { useRecoilState } from 'recoil'
// import { sidebarIsActiveState } from 'store/sidebar/atoms'

const Header = () => {
  // const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
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
        >
          Guardar imagen
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header
