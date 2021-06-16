import { 
  Box,
  Button,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import InstagramIcon from '@material-ui/icons/Instagram'
import { useStyles } from './BrandDialog.styles'

const BrandDialog = () => {
  const classes = useStyles()
  return (
    <Paper variant="outlined">
      <Box p={3}>
        <Box pb={2}>
          <ThumbUpAltOutlinedIcon color="secondary" fontSize="large" />
        </Box>
        <Typography variant="body2">
          <strong>COMPARTE</strong> 
          <br />
          Síguenos en nuestra redes para enterarte de nuevas actualizaciones.
        </Typography>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              startIcon={<TwitterIcon className={classes.twitter} />}
              className={classes.button}
              fullWidth
              href="https://twitter.com/BlanquiazulAL"
              target="_blank"
              rel="noreferrer"
            >
              @BlanquiazulAL
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              startIcon={<InstagramIcon className={classes.instragram} />}
              className={classes.button}
              fullWidth
              href="https://instagram.com/BlanquiazulAL"
              target="_blank"
              rel="noreferrer"
            >
              @BlanquiazulAL
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default BrandDialog