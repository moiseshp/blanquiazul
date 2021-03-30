import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      color: muitheme.palette.secondary.main,
      left: '50%',
      textShadow: '1px 2px 2px #FFF',
      transform: 'translate(-50%, -50%)',
      top: 195,
      fontSize: 175,
      [muitheme.breakpoints.up('md')]: {
        top: 232,
        fontSize: 210,  
      },
      [muitheme.breakpoints.up('xl')]: {
        top: 310,
        fontSize: 290,
      }
    }
  })
)