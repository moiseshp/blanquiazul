import React from 'react'
import {
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Typography
}
from '@material-ui/core'
import { HelpOutline as HelpOutlineIcon } from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const InfoDialog = () => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <React.Fragment>
      <IconButton 
        edge="start"
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <HelpOutlineIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <strong>{(new Date()).getFullYear()} &copy; </strong> {process.env.REACT_APP_NAME}
        </DialogTitle>
        <DialogContent>
          <Typography color="textSecondary">
            Personaliza LA PIEL Blanquiazul 2021 con tu nombre y número. Selecciona tu color de fondo favorito, versión de camiseta entre principal y alterna (pronto). Descarga tu camiseta para usarlo como fondo de pantalla en todos tus dispositivos. 
          </Typography>
          <br />
          <Typography color="textSecondary">
            Este es un proyecto personal desarrollado por <Link href={process.env.REACT_APP_TWITTER} target="_blank">{process.env.REACT_APP_CREATED_BY}</Link>. Si quieres que la camiseta del pueblo siga siendo una de las indumentarias más vendidas en Perú y en todo el continente visita las tiendas oficiales de <Link href={process.env.REACT_APP_NIKE} target="_blank">Nike</Link>. 
          </Typography>
          <br />
          <Typography color="textSecondary">
            Visita la web de <Link href={process.env.REACT_APP_AOC} target="_blank">AOC</Link> y <Link href={process.env.REACT_APP_DORADOBET} target="_blank">Dorado Bet</Link>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="primary"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default InfoDialog