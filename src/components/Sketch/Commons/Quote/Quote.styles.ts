import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontSize: 15,
      [theme.breakpoints.up('sm')]: {
        fontSize: 20
      }
    }
  })
)