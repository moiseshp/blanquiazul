import { Box, TextField, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { skinNameState } from 'store/skin/atoms'

const Name = () => {
  const [name, setName] = useRecoilState(skinNameState)
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.toUpperCase())
  }
  return (
    <Box p={2}>
      <Box mb={1}>
        <Typography variant="h6" color="primary">
          <strong>NOMBRE</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Nombre de tu camiseta
        </Typography>
      </Box>
      <TextField
        placeholder="Por ejm: FARFAN"
        value={name}
        variant="outlined"
        fullWidth
        onChange={handleName}
      />
    </Box>
  )
}

export default Name
