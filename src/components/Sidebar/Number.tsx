import { useState } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { skinNumberState } from 'store/skin/atoms'
import NumberItem from './NumberItem'
const tshirtNumbers = [...new Array(30).keys()].map(key => ++key)
const maxNumberToDisplay = 16

const Number = () => {
  const [number, setNumber] = useRecoilState(skinNumberState)
  const [more, setMore] = useState<boolean>(false)
  const handleNumber = (value: Number) => setNumber(value)
  const getVariant = (value: Number) => number === value  ? 'contained' : 'outlined'
  const getColor = (value: Number) => number === value  ? 'secondary' : 'inherit'
  const getDisplay = (value: Number) => {
    if (value > maxNumberToDisplay && !more) return 'none'
    return 'block'
  }
  const handleMore = () => setMore(!more)
  return (
    <Box p={2}>
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
            style={{ display: getDisplay(number) }}
            xs={3}
            item
          >
            {<NumberItem 
              onClick={() => handleNumber(number)}
              variant={getVariant(number)}
              color={getColor(number)}
              item={number}
            />}
          </Grid>
        ))}
      </Grid>
      <Box mt={1}>
        <Button
          onClick={handleMore}
          variant="outlined"
          size="small"
          fullWidth
        >
          {more ? (<span>Ver menos</span>) : (<span>Más números</span>)}
        </Button>
      </Box>
    </Box>
  )
}

export default Number
