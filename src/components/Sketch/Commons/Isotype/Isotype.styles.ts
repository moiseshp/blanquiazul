import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    column: {
      background: 'white',
      height: 9,
      width: 6,
      marginLeft: 2,
      marginRight: 2,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 8,
      [theme.breakpoints.up('sm')]: {
        fontSize: 10
      }
    }
  })
)