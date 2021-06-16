import { Box, Button } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { globalPreviewState } from 'store/global/atoms'
import { appColorState } from 'store/app/atoms'
import { useStyles } from './PreviewButton.styles'

const Preview = () => {
  const [preview, setPreview] = useRecoilState(globalPreviewState)
  const [color] = useRecoilState(appColorState)
  const classes = useStyles({ color })
  return (
    <Box 
      p={2} 
      className={classes.root}
      display={preview ? 'none' : 'block'}
      textAlign="center"
    >
      <Button
        variant="outlined"
        onClick={() => setPreview(!preview)}
        className={classes.darkButton}
      >
        Previsualizar
      </Button>
    </Box>
  )
}

export default Preview
