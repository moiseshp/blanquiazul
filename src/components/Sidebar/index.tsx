import { Box, Drawer, Divider } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState, sidebarWidthState } from 'store/sidebar/atoms'
import { useStyles } from './Sidebar.styles'
import Name from './Name'
import Number from './Number'
import Tshirt from './Tshirt'
import Theme from './Theme'
const Sidebar = () => {
  const [sidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [sidebarWidth] = useRecoilState(sidebarWidthState)
  const classes = useStyles(({ sidebarIsActive, sidebarWidth }))
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <Box className={classes.box}>
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
