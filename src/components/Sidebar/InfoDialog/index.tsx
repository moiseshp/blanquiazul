import React from 'react'
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography
}
from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import HelpIcon from '@material-ui/icons/Help'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import FaqList from './FaqList'
import SocialNetworks from 'components/Header/BrandDialog/SocialNetworks'

const InfoDialog = () => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <IconButton 
        color="secondary"
        onClick={() => setOpen(true)}
      >
        <HelpIcon />
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
              <strong>PREGUNTAS FRECUENTES</strong>
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
          <Typography>
            Para una mejor experiencia utiliza navegadores modernos como Google Chrome, Safari o Mozilla. Si esto no es suficiente te dejamos una lista de posibles soluciones compartida por los mismos usuarios: 
          </Typography>
          <Box my={2}>
            <FaqList />
          </Box>
          <SocialNetworks />
          <Box mb={2} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InfoDialog