import { Box, Drawer, Divider } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState } from 'store/sidebar/atoms'
import { useStyles } from './Sidebar.styles'
import Header from './Header'
import Footer from './Footer'
import Name from './Name'
import Number from './Number'
import Tshirt from './Tshirt'
import Theme from './Theme'
const Sidebar = () => {
  const [sidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const classes = useStyles()
  return (
    <Drawer
      variant="persistent"
      open={sidebarIsActive}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <Header />
      <Box className={classes.box}>
        <Divider />
        <Name />
        <Divider />
        <Number />
        <Divider />
        <Theme />
        <Divider />
        <Tshirt />
      </Box>
      <Footer />
    </Drawer>
  )
}

export default Sidebar
