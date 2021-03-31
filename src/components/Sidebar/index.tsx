import { AppBar, Box, IconButton, Drawer, Divider, Hidden, Toolbar, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState, sidebarWidthState } from 'store/sidebar/atoms'
import { useStyles } from './Sidebar.styles'
import AspectRatio from './AspectRatio'
import Name from './Name'
import Number from './Number'
import Tshirt from './Tshirt'
import Theme from './Theme'
const Sidebar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [sidebarWidth] = useRecoilState(sidebarWidthState)
  const classes = useStyles(({ sidebarIsActive, sidebarWidth }))
  return (
    <Drawer
      variant="persistent"
      open={sidebarIsActive}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="body1">
            <strong>2021</strong> &copy; LA PIEL
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            onClick={() => setSidebarIsActive(false)}
            color="inherit"
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className={classes.box}>
        <Hidden smDown>
          <AspectRatio />
        </Hidden>
        <Divider />
        <Name />
        <Divider />
        <Number />
        <Divider />
        <Tshirt />
        <Divider />
        <Theme />
      </Box>
    </Drawer>
  )
}

export default Sidebar
