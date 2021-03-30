import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { ITheme } from 'store/types/theme'

const width = '100%'
interface IProps {
  theme: ITheme, 
  tshirtWidth: any
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
      padding: 0,
      paddingTop: '2%',
      position: 'absolute',
      height: '75%',
      width: '100%',
      left: '50%',
      top: '50%',
      bottom: 0,
      transform: 'translate(-50%, -50%)',
      margin: 0,
      border: 0
    }),
    tshirt: (props: IProps) => ({
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: 'auto',
      height: '93%',
      zIndex: 1
    }),
    tshirtShadow: (props: IProps) => ({
      backgroundImage: `radial-gradient(${props.theme.color?.dark} 5%, transparent 50%)`,
      content: '""',
      position: 'absolute',
      width: props.tshirtWidth,
      height: 80,
      bottom: -12,
      zIndex: -1,
      left: '50%',
      transform: 'translateX(-50%)'
    }),
    headingWrapper: {
      width: '100%',
      height: '14%',
      position: 'absolute',
      zIndex: 1
    },
    title: (props: IProps) => ({
      width: '100%',
      textAlign: 'center',
      padding: 0,
      margin: 0,
      color: props.theme.isDark ? 'white' : props.theme.color?.dark,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 'normal'
    })
  })
)