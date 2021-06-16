import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import CloseIcon from '@material-ui/icons/Close'
import InfoDialog from './InfoDialog'
import { useRecoilState } from 'recoil'
import { globalSidebarState } from 'store/global/atoms'

const Header = () => {
  const [sidebar, setSidebar] = useRecoilState(globalSidebarState)
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box component="span" mr={2} display="flex" alignItems="center">
          <TuneOutlinedIcon color="primary" />
        </Box>
        <Typography variant="body1">
          PERSONALIZA
        </Typography>
        <Box flexGrow={1} />
        <InfoDialog />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={() => setSidebar(!sidebar)}
        >
          <CloseIcon />
        </IconButton> 
      </Toolbar>
    </AppBar>
  )
}

export default Header
