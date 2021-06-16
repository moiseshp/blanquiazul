import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: ({ color }: any) => ({
      background: color.color,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 0, 0, .6)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    }),
    darkButton: {
      borderRadius: 25,
      borderColor: 'rgba(255, 255, 255, .85)',
      color: 'rgba(255, 255, 255, .85)',
      paddingLeft: 35,
      paddingRight: 35
    }
  })
)