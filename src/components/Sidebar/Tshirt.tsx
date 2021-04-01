import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { tshirtsState } from 'store/tshirts/atoms'
import { skinTshirtState } from 'store/skin/atoms'
import {
  CheckOutlined as CheckOutlinedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon 
} from '@material-ui/icons'

import { ITshirt } from 'store/types/tshirt'

// TODO: https://material-ui.com/es/styles/basics/
const Tshirt = () => {
  const [tshirts] = useRecoilState(tshirtsState)
  const [tshirt] = useRecoilState(skinTshirtState)
  const getColor = (id: string | undefined) => tshirt?.id === id ? 'primary' : 'inherit' 
  const getStyles = (tshirt: ITshirt) => ({
    backgroundColor: tshirt.color,
    color: tshirt.isDark ? 'white' : 'black'
  }) 
  return (
    <Box p={2}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>CAMISETA</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona el tipo de presentación
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {tshirts.map((item: ITshirt) => 
          <Grid key={item.id} item xs={6}>
            <Button
              fullWidth
              variant="contained"
              style={getStyles(item)}
              disableElevation
              size="large"
              color={getColor(item.id)}
              disabled={item.id === 'secondary'}
            >
              {tshirt?.id === item.id ? (
                <CheckOutlinedIcon />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Tshirt
