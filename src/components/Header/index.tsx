import { AppBar, Button, Toolbar } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Slide from '@material-ui/core/Slide'
import { useRecoilState } from 'recoil'
import { globalSidebarState, globalPreviewState } from 'store/global/atoms'
import { useStyles } from './Header.styles'
import BrandDialog from './BrandDialog'
import ShareButton from './ShareButton'
import isMobile from 'ismobilejs'

const Navbar = () => {
  const [preview] = useRecoilState(globalPreviewState)
  const [sidebar, setSidebar] = useRecoilState(globalSidebarState)
  const device = isMobile(window.navigator)
  const deviceIsMobile = device.phone || device.tablet
  const classes = useStyles()
  return (
    <Slide appear={false} direction="down" in={!preview}>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.root}
        color="transparent"
      >
        <Toolbar>
          <BrandDialog />
          {deviceIsMobile && (
            <ShareButton />
          )}
          <div className={classes.grow}/>
          <Button
            color="inherit" 
            endIcon={<ArrowForwardIcon />}
            onClick={() => setSidebar(!sidebar)}
          >
            Personaliza
          </Button>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default Navbar
