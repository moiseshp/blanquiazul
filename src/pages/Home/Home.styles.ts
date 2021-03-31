import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muiTheme: Theme) =>
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
    container: (props: any) => ({
      background: `radial-gradient(circle, ${props.theme.color?.light}, ${props.theme.color?.base})`,
      height: '100%',
      width: props.screen,
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
    tshirtWrapper: (props: any) => {
      console.info(props.screen)
      return {
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
        [muiTheme.breakpoints.up('md')]: {
          paddingTop: 10,
          height: 450,
          width: 360,
          marginTop: -225,       
          marginLeft: -180
        },
        [muiTheme.breakpoints.up('lg')]: {
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
      }
    },
    title: (props: any) => ({
      width: '100%',
      textAlign: 'center',
      color: props.theme.isDark ? 'white' : muiTheme.palette.primary.main,
      position: 'absolute',
      top: -70,
      fontSize: 20,
      letterSpacing: 2
    })
  })
)