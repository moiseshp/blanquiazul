import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { ITheme } from 'store/types/theme'

const width = '100%'
interface IProps {
  theme: ITheme
}

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      height: '100vh',
      flexGrow: 1,
      padding: 0,
      position: 'relative',
    },
    container: (props: IProps) => ({
      background: `radial-gradient(circle, ${props.theme.color?.light}, ${props.theme.color?.base})`,
      height: '100%',
      width,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      '&:before': {
        content: '""',
        background: `linear-gradient(bottom, transparent, ${props.theme.color?.dark})`,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }
    }),
    tshirtWrapper: (props: IProps) => ({
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: 0,
      position: 'absolute',
      left: '50%',
      top: '50%',
      margin: 0,
      border: 0,
      paddingTop: 10,
      height: 375,
      width: 300,
      marginTop: -187,
      marginLeft: -150,
      // 1920 * 990
      // 1440 * 990
      // 1366 * 768
      //  360 * 650
      [muitheme.breakpoints.up('md')]: {
        paddingTop: 10,
        height: 450,
        width: 360,
        marginTop: -225,       
        marginLeft: -180
      },
      [muitheme.breakpoints.up('xl')]: {
        paddingTop: 25,
        height: 600,
        width: 480,
        marginTop: -300,  
        marginLeft: -240,
      },
      '&:before': {
        backgroundImage: `radial-gradient(${props.theme.color?.dark} 5%, transparent 50%)`,
        content: '""',
        position: 'absolute',
        width: '100%',
        height: 60,
        bottom: -50,
        zIndex: -1,
        left: '50%',
        transform: 'translateX(-50%)'  
      }
      
    }),
    title: (props: IProps) => ({
      width: '100%',
      textAlign: 'center',
      color: props.theme.isDark ? 'white' : props.theme.color?.dark,
      position: 'absolute',
      top: -70,
      fontSize: 20,
      letterSpacing: 2
    }),
    footer: (props: IProps) => ({
      width: '100%',
      textAlign: 'center',
      color: props.theme.isDark ? 'white' : props.theme.color?.dark,
      position: 'absolute',
      bottom: -70,
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: 1
    })
  })
)