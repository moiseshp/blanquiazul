import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((muitheme: Theme) =>
  createStyles({
    drawerPaper: {
      width: '100%',
      [muitheme.breakpoints.up('sm')]: {
        width: 380,
      }
    },
    box: {
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: muitheme.palette.grey[200],
      height: '100%',
      overflow: 'auto',
      scrollbarColor: `${muitheme.palette.grey[400]} ${muitheme.palette.grey[100]}`,
      scrollbarWidth: 'thin',
      [muitheme.breakpoints.up('sm')]: {
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
          borderRadius: 10,
          backgroundColor: muitheme.palette.grey[100],
        },
        '&::-webkit-scrollbar': {
          width: 6,
          height: 6,
          backgroundColor: muitheme.palette.grey[400]
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 10,
          boxShadow: 'inset 0 0 6px rgba(0,0,0,.1)',
          backgroundColor: muitheme.palette.grey[400],
        }
      }
    }
  })
)