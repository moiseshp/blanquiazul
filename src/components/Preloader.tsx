import { Box, CircularProgress } from '@material-ui/core'

const Preloader = () => {
  return (
    <Box 
      height="100vh" 
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  )
}

export default Preloader
