import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      left: '50%',
      color: muitheme.palette.secondary.main,
      fontFamily: 'Squada One',
      textShadow: '2px 2px 2px #FFF',
      transform: 'translate(-50%, -50%)',
      letterSpacing: -1,
      top: 103,
      fontSize: 37,
      [muitheme.breakpoints.up('md')]: {
        top: 120,
        fontSize: 42,  
      },
      [muitheme.breakpoints.up('xl')]: {
        top: 160,
        fontSize: 55,  
      }
    }
  })
)