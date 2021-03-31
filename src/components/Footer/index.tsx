import { AppBar, Button, Toolbar } from '@material-ui/core'
import { ArrowDownward as ArrowDownwardIcon } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { skinThemeState } from 'store/skin/atoms'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { useStyles } from './Footer.styles'

const Footer = () => {
  const [theme] = useRecoilState(skinThemeState)
  const muiTheme = useTheme()
  const matches = useMediaQuery(muiTheme.breakpoints.down('xs'))
  const classes = useStyles({ theme })
  return (
    <AppBar
      className={classes.root}
      position="fixed"
      color="transparent"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Button
          className={classes.button}
          variant="outlined"
          color="default"
          startIcon={<ArrowDownwardIcon />}
          fullWidth={matches}
        >
          Descargar
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
