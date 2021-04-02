import { AppBar, Button, Hidden, Link, Toolbar, Typography } from '@material-ui/core'
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState } from 'store/sidebar/atoms'
import { skinThemeState } from 'store/skin/atoms'
import { useStyles } from './Header.styles'

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [theme] = useRecoilState(skinThemeState)
  const classes = useStyles({ theme })
  const twitterLink = process.env.REACT_APP_TWITTER
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.root}
      color="transparent"
    >
      <Toolbar>
        <Typography variant="body2">
          {/* <Link 
            href={twitterLink}
            target="_blank"
            color="inherit"
          >
            @moiseshp
          </Link> */}
        </Typography>
        <div className={classes.grow}/>
        <Button
          color="default" 
          className={classes.button}
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
