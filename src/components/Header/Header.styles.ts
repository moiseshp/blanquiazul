import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: 'white'
    },
    grow: {
      flexGrow: 1
    }
  })
)