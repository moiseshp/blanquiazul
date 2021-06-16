import React from 'react'
import {
  Avatar,
  AppBar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Link,
  Paper,
  Toolbar,
  Typography
}
from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SocialNetworks from './SocialNetworks'
import { useStyles } from './BrandDialog.styles'

const InfoDialog = () => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <>
      <IconButton 
        edge="start"
        onClick={() => setOpen(true)}
      >
        <Avatar className={classes.avatar}>B</Avatar>
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <AppBar 
          position="relative"
          color="transparent"
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6">
              <strong>{process.env.REACT_APP_NAME}</strong> <small>{process.env.REACT_APP_VERSION}</small>
            </Typography>
            <Box flexGrow={1} />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Typography variant="body2">
            Personaliza la camiseta de Alianza Lima con tu nombre y número, color de fondo favorito, tipo de presentación y descarga tu camiseta como imagen JPEG.
          </Typography>
          <br />
          <SocialNetworks />
          <br />
          <Paper variant="outlined">
            <Box p={3}>
              <Box pb={2}>
                <PanToolOutlinedIcon color="secondary" fontSize="large" />
              </Box>
              <Typography variant="body2">
                <strong>COMPRA TU CAMISETA</strong>
                <br />
                BLANQUIAZUL.com no vende camisetas. Visita las tiendas oficiales de Nike <Link color="secondary" href={process.env.REACT_APP_NIKE} rel="noreferrer" target="_blank">aquí</Link>. 
                Los logotipos de las marcas auspiciadoras le pertenecen a <Link color="secondary" href={process.env.REACT_APP_AOC} target="_blank" rel="noreferrer">AOC</Link> y <Link color="secondary" href={process.env.REACT_APP_DORADOBET} target="_blank" rel="noreferrer">Dorado Bet</Link> respectivamente.
              </Typography>
            </Box>
          </Paper>
          <br />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InfoDialog