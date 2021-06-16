import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muiTheme) =>
  createStyles({
    avatar: {
      color: 'white',
      backgroundColor: muiTheme.palette.primary.main,
      fontWeight: 700,
      fontSize: 18,
      width: 35,
      height: 35
    },
    twitter: {
      color: '#00acee'
    },
    facebook: {
      color: '#3b5998'
    },
    instragram: {
      color: '#E1306C'
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 800
    }
  })
)