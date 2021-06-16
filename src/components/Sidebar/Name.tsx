import { Box, TextField, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appNameState } from 'store/app/atoms'
const maxCharacters = 12
const Name = () => {
  const [name, setName] = useRecoilState(appNameState)
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase()
    const regExp = /^[a-zA-Z.\b ]+$/
    if (value === '' || regExp.test(value)) {
      if (maxCharacters > value.length) setName(value)    
    }
  }

  return (
    <Box py={2} px={3}>
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
