import { Typography } from '@material-ui/core'
import { useStyles } from './Watermarking.styles'

const Watermarking = () => {
  const classes = useStyles()
  return (
    <Typography component="div" className={classes.root}>
      {process.env.REACT_APP_SIGNATURE}
    </Typography>
  )
}

export default Watermarking
