import { Box, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appQuoteState } from 'store/app/atoms'
import { useStyles } from './Quote.styles'

const Quote = () => {
  const [quote] = useRecoilState(appQuoteState)
  const classes = useStyles()
  return (
    <Typography component="div" className={classes.root}>
      <Box letterSpacing={3}>
        {quote}
      </Box>
    </Typography>
  )
}

export default Quote
