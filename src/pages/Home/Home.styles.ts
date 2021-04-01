import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muiTheme: Theme) =>
  createStyles({
    content: ({ theme }) => ({
      background: `radial-gradient(circle, ${theme.color?.light}, ${theme.color?.base})`,
      height: '100vh',
      padding: 0,
      zIndex: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    container: ({ theme, screen, breakpoint }: any) => ({
      background: `radial-gradient(circle, ${theme.color?.light}, ${theme.color?.base})`,
      height: breakpoint === 'xs' ? '100%' : screen.height,
      width: breakpoint === 'xs' ? '100%' : screen.width,
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:before': {
        content: '""',
        background: `linear-gradient(bottom, transparent, ${theme.color?.dark})`,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }
    }),
    tshirtWrapper: ({ screen, theme, tshirt }: any) => ({
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/${tshirt.source})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: 0,
      position: 'relative',
      margin: 0,
      border: 0,
      height: screen.tshirt.height,
      width: screen.tshirt.width,
      '&:before': {
        backgroundImage: `radial-gradient(${theme.color?.dark} 5%, transparent 50%)`,
        content: '""',
        position: 'absolute',
        width: '100%',
        height: 60,
        bottom: -50,
        zIndex: -1,
        left: '50%',
        transform: 'translateX(-50%)'  
      } 
    })
  })
)