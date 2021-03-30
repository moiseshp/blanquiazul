import { AppBar, Box, Toolbar } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { sidebarIsActiveState, sidebarWidthState } from 'store/sidebar/atoms'
import { useStyles } from './Footer.styles'

const Footer = () => {
  const [sidebarIsActive] = useRecoilState(sidebarIsActiveState)
  const [sidebarWith] = useRecoilState(sidebarWidthState)
  const classes = useStyles(({ sidebarIsActive, sidebarWith }))
  const date = new Date()
  return (
    <AppBar className={classes.root} color="transparent" elevation={0}>
      <Toolbar>
        <Box flexGrow={1} />
        Navigation
      </Toolbar>
    </AppBar>
  )
}

export default Footer
