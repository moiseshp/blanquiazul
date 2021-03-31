import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
const white = 'rgba(255, 255, 255, .85)'
export const useStyles = makeStyles((muiTheme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: 5,
      [muiTheme.breakpoints.up('lg')]: {
        bottom: 20
      }
    },
    toolbar: {
      margin: '0 auto'
    },
    button: (props: any) => ({
      borderColor: props.theme.isDark ? white : muiTheme.palette.primary.main,
      color: props.theme.isDark ? white : muiTheme.palette.primary.main
    })
  })
)