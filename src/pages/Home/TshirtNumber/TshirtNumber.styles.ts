import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    root: ({ screen }: any) => ({
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      color: muitheme.palette.secondary.main,
      left: '50%',
      fontFamily: 'NikeCroatia2020',
      textShadow: '1px 2px 2px #FFF',
      transform: 'translate(-50%, -50%)',
      top: screen.tshirt.number.top,
      fontSize: screen.tshirt.number.fontSize
    })
  })
)