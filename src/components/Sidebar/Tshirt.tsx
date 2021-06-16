import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { appPresentationState, appColorState } from 'store/app/atoms'
import { IPresentation } from 'store/types/presentation'
import presentations from 'utils/data/presentations'
import colors from 'utils/data/colors'

const Tshirt = () => {
  const [presentation, setPresentation] = useRecoilState(appPresentationState)
  const setColor = useSetRecoilState(appColorState)
  const handlePresentation = (item: IPresentation) => {
    const color = colors.find(({ id }) => id === item.id)
    setColor(color)
    setPresentation(item)
  }
  return (
    <Box py={2} px={3}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>CAMISETA</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona el tipo de presentación
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {presentations.filter(item => item.active)
          .map((item: IPresentation) => 
          <Grid key={item.id} item xs={6}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              size="large"
              color={presentation?.id === item.id ? 'primary' : 'default'}
              onClick={() => handlePresentation(item)}
            >
              {item.name}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Tshirt
