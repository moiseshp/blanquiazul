import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'relative',
      zIndex: 1000,
      width: 260,
      [theme.breakpoints.up('sm')]: {
        width: 360,
      }
    },
    shadow: {
      background: 'rgba(0, 0, 0, .25)',
      position: 'absolute',
      width: '62%',
      height: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '50%',
    },
    name: ({ presentation }: any) => ({
      color: presentation.text.color,
      textShadow: `1px 1px 2px ${presentation.text.shadow}`,
      textAlign: 'center',
      position: 'absolute',
      width: '100%',
      top: 73,
      fontSize: 40,
      letterSpacing: .5,
      [theme.breakpoints.up('sm')]: {
        top: 100,
        fontSize: 58,
      }
    }),
    number: ({ presentation }: any) => ({
      color: presentation.text.color,
      textShadow: `1px 1px 2px ${presentation.text.shadow}`,
      textAlign: 'center',
      position: 'absolute',
      width: '100%',
      letterSpacing: 1,
      top: 98,
      fontSize: 155,
      [theme.breakpoints.up('sm')]: {
        top: 136,
        fontSize: 210    
      }
    })
  })
)