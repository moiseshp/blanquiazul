import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: ({ color }: any) => ({
      backgroundColor: color.color,
      background: `radial-gradient(circle, transparent, rgba(0, 0, 0, .6) 85%)`,
      zIndex: 0,
      height: '100vh',
    }),
    spinner: {
      color: 'white'
    }
  })
)