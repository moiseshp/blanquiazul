import { AppBar, Button, Hidden, Toolbar } from '@material-ui/core'
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState } from 'store/sidebar/atoms'
import { useStyles } from './Header.styles'
import InfoDialog from './InfoDialog'
import ShareButton from './ShareButton'

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const classes = useStyles()
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.root}
      color="transparent"
    >
      <Toolbar>
        <InfoDialog />
        <ShareButton />
        <div className={classes.grow}/>
        <Button
          color="inherit" 
          endIcon={<ArrowForwardIcon />}
          onClick={() => setSidebarIsActive(!sidebarIsActive)}
        >
          Personaliza <Hidden xsDown>tu camiseta</Hidden>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
