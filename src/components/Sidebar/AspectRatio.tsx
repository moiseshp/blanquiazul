import React from 'react'
import { Button, Grid } from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { skinScreenState } from 'store/skin/atoms'
import screens from 'utils/screens'
import useBreakpoint from 'hooks/useBreakpoint'
type TIcon = {
  icon?: string
}
const MuiIcon = ({ icon }: TIcon) => {
  const AllIcons: Record<string, any> = Icons
  const Component = AllIcons[icon || 'PhoneIphone']
  return <Component />
}

const AspectRatio = () => {
  const [screen, setScreen] = useRecoilState(skinScreenState)
  const breakpoint = useBreakpoint()
  
  React.useEffect(() => {
    let screenId = 'small' 
    if (['md'].includes(breakpoint)) screenId = 'medium'
    if (['lg', 'xl'].includes(breakpoint)) screenId = 'large'
    const getScreen = screens.find(screen => screen.id === screenId)
    setScreen(getScreen)      
  }, [breakpoint, setScreen])

  return (
    <Grid container spacing={1}>
      {screens.map(item => (
        <Grid
          key={item.id}
          xs={4}
          item
        >
          <Button
            disableElevation
            variant={item.id === screen?.id ? 'contained' : 'outlined'}
            color={item.id === screen?.id ? 'primary' : 'inherit'}
            size="large"
            fullWidth
            onClick={() => setScreen(item)}
          >
            <MuiIcon icon={item.icon} />
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default AspectRatio
