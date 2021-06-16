import { Button, Box, Grid, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appSloganState } from 'store/app/atoms'
import slogans from 'utils/data/slogans'
const Slogan = () => {
  const [slogan, setSlogan] = useRecoilState(appSloganState)
  return (
    <Box py={2} px={3}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>ISOTIPO</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona una opción
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {slogans.map((item: any) => 
          <Grid key={item.id} item xs={4}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              size="large"
              color={slogan === item.text ? 'primary' : 'default'}
              onClick={() => setSlogan(item.text)}
            >
              {item.name}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Slogan
