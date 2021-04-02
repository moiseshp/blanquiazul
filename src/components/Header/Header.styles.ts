import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: {
      color: 'white',
    },
    grow: {
      flexGrow: 1,
    },
    button: ({ theme }: any) => ({
      backgroundColor: theme.color.dark,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.color.dark,
      }
    })
  })
)