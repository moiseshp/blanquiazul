import { Box, Button, Grid, Typography } from '@material-ui/core'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { useRecoilState } from 'recoil'
import { appColorState } from 'store/app/atoms'
import colors from 'utils/data/colors'
import { IColor } from 'store/types/color'

const Color = () => {
  const [color, setColor] = useRecoilState(appColorState)
  const getStyle = (color: IColor) => ({ 
    backgroundColor: color.color,
    color: color.dark ? 'white' : 'black'
  })
  return (
    <Box py={2} px={3}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>COLOR DE FONDO</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona tu color favorito
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {colors.filter(item => item.active)
          .map((item: IColor) => 
          <Grid key={item.id} item xs={4}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              size="large"
              style={getStyle(item)}
              onClick={() => setColor(item)}
            >
              {color?.id === item.id ? (
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

export default Color
