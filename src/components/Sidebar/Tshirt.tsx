import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { tshirtsState } from 'store/tshirts/atoms'
import { skinTshirtState } from 'store/skin/atoms'
import { skinSponsorState } from 'store/skin/atoms'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import { ITshirt } from 'store/types/tshirt'

// TODO: https://material-ui.com/es/styles/basics/
const Tshirt = () => {
  const [tshirts] = useRecoilState(tshirtsState)
  const [tshirt] = useRecoilState(skinTshirtState)
  const [sponsor, setSponsor] = useRecoilState(skinSponsorState)
  const getVariant = (id: string | undefined) => tshirt?.id === id ? 'contained' : 'outlined' 
  const getColor = (id: string | undefined) => tshirt?.id === id ? 'primary' : 'inherit' 
  const getStyles = (tshirt: ITshirt) => ({
    backgroundColor: tshirt.color,
    color: tshirt.isDark ? 'white' : 'black'
  }) 
  const handleSponsor = () => {
    setSponsor({
      ...sponsor,
      isActive: !sponsor?.isActive
    })
  }
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
          <Grid key={item.id} item sm={6}>
            <Button
              fullWidth
              variant={getVariant(item.id)}
              style={getStyles(item)}
              disableElevation
              size="large"
              color={getColor(item.id)}
              disabled={item.id === 'secondary'}
            >
              {tshirt?.id === item.id ? (
                <CheckOutlinedIcon />
              ) : (
                <strong>{item.name}</strong>
              )}
            </Button>
          </Grid>
        )}
      </Grid>
      <Box mt={1}>
        <FormControlLabel
          control={<Checkbox checked={sponsor?.isActive} onChange={handleSponsor} />}
          label="Mostrar sponsors"
        />
      </Box>
    </Box>
  )
}

export default Tshirt
