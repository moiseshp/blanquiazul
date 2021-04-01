import { AppBar, IconButton, Link, Toolbar, Typography } from '@material-ui/core'
import {  TuneOutlined as TuneOutlinedIcon } from '@material-ui/icons'
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
          <Link 
            href={twitterLink}
            target="_blank"
            color="inherit"
          >
            @moiseshp
          </Link>
        </Typography>
        <div className={classes.grow}/>
        <IconButton
          edge="end"
          color="default" 
          onClick={() => setSidebarIsActive(!sidebarIsActive)}
          className={classes.iconButton}
        >
          <TuneOutlinedIcon /> 
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
