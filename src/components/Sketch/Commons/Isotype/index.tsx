import { Box } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appSloganState } from 'store/app/atoms'
import { useStyles } from './Isotype.styles'

const Isotype = () => {
  const [slogan] = useRecoilState(appSloganState)
  const classes = useStyles()
  return (
    <>
      <Box display="flex" justifyContent="center" mb={.7}>
        {[1, 2, 3].map(key => (
          <Box key={key} className={classes.column} />
        ))}
      </Box>
      <Box letterSpacing={2} className={classes.text}>
        {slogan}
      </Box>
      <Box display="flex" justifyContent="center" mt={.7}>
        {[1, 2, 3].map(key => (
          <Box key={key} className={classes.column} />
        ))}
      </Box>
    </>    
  )
}

export default Isotype
