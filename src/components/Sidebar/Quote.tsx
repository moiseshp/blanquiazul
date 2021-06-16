import { Box, TextField, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appQuoteState } from 'store/app/atoms'
const maxCharacters = 19
const Quote = () => {
  const [quote, setQuote] = useRecoilState(appQuoteState)
  const handleQuote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase()
    if (maxCharacters > value.length) setQuote(value)    
  }

  return (
    <Box py={2} px={3}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>UNA FRASE</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Una frase que exprese tu sentimiento
        </Typography>
      </Box>
      <TextField
        placeholder="Por ejm: ¡ARRIBA ALIANZA!"
        value={quote}
        variant="outlined"
        fullWidth
        onChange={handleQuote}
      />
    </Box>
  )
}

export default Quote
