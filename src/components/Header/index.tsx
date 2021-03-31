import { AppBar, IconButton, Link, Toolbar, Typography } from '@material-ui/core'
import {  TuneOutlined as TuneOutlinedIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState, sidebarWidthState } from 'store/sidebar/atoms'
import { useStyles } from './Header.styles'

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [sidebarWith] = useRecoilState(sidebarWidthState)
  const classes = useStyles(({ sidebarIsActive, sidebarWith }))
  const handleSidebar = (event: React.MouseEvent<HTMLElement>) => {
    setSidebarIsActive(!sidebarIsActive)
  }
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
          color="inherit" 
          onClick={handleSidebar}
        >
          <TuneOutlinedIcon /> 
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
