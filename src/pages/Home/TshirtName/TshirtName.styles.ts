import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: ({ screen }: any) => ({
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      left: '50%',
      color: muitheme.palette.secondary.main,
      fontFamily: 'NikeCroatia2020',
      textShadow: '1px 1px 2px #FFF',
      transform: 'translate(-50%, -50%)',
      letterSpacing: 1,
      top: screen.tshirt.name.top,
      fontSize: screen.tshirt.name.fontSize
    })
  })
)