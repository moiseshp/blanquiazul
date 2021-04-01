import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState } from 'store/sidebar/atoms'

const Header = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="body1">
          <strong>{(new Date()).getFullYear()} &copy; </strong> {process.env.REACT_APP_NAME}
        </Typography>
        <Box flexGrow={1} />
        <IconButton
          onClick={() => setSidebarIsActive(!sidebarIsActive)}
          color="inherit"
          edge="end"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
