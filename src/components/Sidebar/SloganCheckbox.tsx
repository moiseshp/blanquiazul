import { Box, Checkbox, FormControlLabel } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appShowSloganState } from 'store/app/atoms'

const SloganCheckbox = () => {
  const [showSlogan, setShowSlogan] = useRecoilState(appShowSloganState)
  return (
    <Box py={1} px={3}>
      <FormControlLabel
        control={
          <Checkbox
            checked={showSlogan}
            onChange={() => setShowSlogan(!showSlogan)}
            name="checkedSlogan" 
          />
        }
        label="Mostrar isotipo y frase"
      />      
    </Box>
  )
}

export default SloganCheckbox
