import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muiTheme: Theme) =>
  createStyles({
    content: ({ theme }) => ({
      background: `radial-gradient(circle, ${theme.color?.light}, ${theme.color?.dark})`,
      padding: 0,
      zIndex: 0,
    }),
    container: ({ theme }: any) => ({
      background: `radial-gradient(circle, ${theme.color?.light}, ${theme.color?.dark})`,
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 0 0 15px rgba(255, 255, 255, .75)',
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
    tshirtWrapper: ({ theme, tshirt }: any) => ({
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/${tshirt.source})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: 0,
      position: 'relative',
      margin: 0,
      border: 0,
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