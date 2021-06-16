import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontSize: 8,
      fontWeight: 700,
      background: 'rgba(0, 0, 0, .75)',
      padding: '3px 6px',
      display: 'inline-block',
      borderRadius: 4,
      letterSpacing: 1,
      lineHeight: .9,
      [theme.breakpoints.up('sm')]: {
        fontSize: 11
      }
    }
  })
)