import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: {
      color: 'white',
    },
    grow: {
      flexGrow: 1,
    },
    typography: {
      color: muitheme.palette.grey[400]
    }
  })
)