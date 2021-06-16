import { Box, CircularProgress } from '@material-ui/core'

const Spinner = () => {
  return (
    <Box 
      height="100vh" 
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <CircularProgress />
      </Box>
    </Box>
  )
}

export default Spinner
