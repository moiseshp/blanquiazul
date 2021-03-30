import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ sidebarIsActive, sidebarWith }: any) => ({
      width: sidebarIsActive ? `calc(100% - ${sidebarWith}px)` : '100%',
      marginRight: sidebarIsActive ? sidebarWith : 0,
      zIndex: theme.zIndex.drawer + 1,
      color: 'white'
    }),
    grow: {
      flexGrow: 1,
    },
    typography: {
      color: theme.palette.grey[400]
    }
  })
)