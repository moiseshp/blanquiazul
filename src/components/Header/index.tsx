import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import {  TuneOutlined as TuneOutlinedIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState, sidebarWidthState } from 'store/sidebar/atoms'
import { useStyles } from './Header.styles'

const Navbar = () => {
  const [sidebarIsActive, setSidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [sidebarWith] = useRecoilState(sidebarWidthState)
  const classes = useStyles(({ sidebarIsActive, sidebarWith }))
  const date = new Date()
  const handleSidebar = (event: React.MouseEvent<HTMLElement>) => {
    setSidebarIsActive(!sidebarIsActive)
  }
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.root}
      color="transparent"
    >
      <Toolbar>
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
