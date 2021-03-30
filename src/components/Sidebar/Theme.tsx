import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { themesState } from 'store/themes/atoms'
import { skinThemeState } from 'store/skin/atoms'
import { ITheme } from 'store/types/theme'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'

// TODO: https://material-ui.com/es/styles/basics/
const Theme = () => {
  const [themes] = useRecoilState(themesState)
  const [theme, setTheme] = useRecoilState(skinThemeState)
  const getVariant = (id: string | undefined) => theme?.id === id ? 'contained' : 'outlined' 
  const getStyles = (theme: ITheme) => ({
    backgroundColor: theme.color?.base,
    color: theme.isDark ? 'white' : 'black'
  }) 
  return (
    <Box p={2}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>BACKGROUND</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Selecciona el color de fondo
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {themes.map((item: ITheme) => 
          <Grid key={item.id} item sm={6}>
            <Button
              fullWidth
              variant={getVariant(item.id)}
              style={getStyles(item)}
              disableElevation
              size="large"
              onClick={() => setTheme(item)}
            >
              {theme?.id === item.id ? (
                <CheckOutlinedIcon />
              ) : (
                <strong>{item.name}</strong>
              )}
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Theme
