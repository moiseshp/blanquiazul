import { Box, Grid, InputAdornment, TextField, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appNumberState } from 'store/app/atoms'
import NumberItem from './NumberItem'
const tshirtNumbers = [7, 8, 9, 10].map(key => key)
const maxCharacters = 2
const Number = () => {
  const [number, setNumber] = useRecoilState(appNumberState)
  const getVariant = (value: Number) => number === value  ? 'contained' : 'outlined'
  const getColor = (value: Number) => number === value  ? 'primary' : 'inherit'

  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (maxCharacters >= value.length) setNumber(parseFloat(value) || 0)
  }

  return (
    <Box py={2} px={3}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>NÚMERO</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona tu número favorito
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {tshirtNumbers.map((number: Number) => (
          <Grid
            key={number.toString()}
            xs={3}
            item
          >
            {<NumberItem 
              onClick={() => setNumber(number)}
              variant={getVariant(number)}
              color={getColor(number)}
              item={number}
            />}
          </Grid>
        ))}
      </Grid>
      <Box mt={2} />
      <TextField
        label="O ingresa un número 1 - 99"
        value={number}
        variant="outlined"
        fullWidth
        InputLabelProps={{ shrink: true }}
        inputProps={{ 
          inputMode: 'numeric',
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><strong>#</strong></InputAdornment>
        }}
        onChange={handleNumber}
      />
    </Box>
  )
}

export default Number
