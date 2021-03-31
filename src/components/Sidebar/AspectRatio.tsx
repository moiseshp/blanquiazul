import { Box, Button, Grid } from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { skinScreenState } from 'store/skin/atoms'
// https://www.manuelkruisz.com/blog/posts/dynamic-imports-material-icons
const items = [
  { id: 1, screen: 360, text: 'Mobile', icon: 'PhoneIphone' },
  { id: 2, screen: 800, text: 'Box', icon: 'FlipToFrontOutlined' },
  { id: 3, screen: '100%', text: 'Desktop', icon: 'AspectRatio' }
  // { id: 2, text: 'Box', icon: 'CheckBoxOutlineBlank' },
  // { id: 3, text: 'Desktop', icon: 'DesktopWindows' }
]

type TIcon = {
  icon?: string
}
const MuiIcon:React.FC<TIcon> = ({ icon }) => {
  const AllIcons: Record<string, any> = Icons
  const Component = AllIcons[icon || 'PhoneIphone']
  return <Component />
}

const AspectRatio = () => {
  const [screen, setScreen] = useRecoilState(skinScreenState)
  return (
    <Box p={2}>
      <Grid container spacing={1}>
        {items.map(item => (
          <Grid
            key={item.id}
            xs={4}
            item
          >
            <Button
              disableElevation
              variant={item.screen === screen ? 'contained' : 'outlined'}
              color={item.screen === screen ? 'primary' : 'inherit'}
              size="large"
              fullWidth
              onClick={() => setScreen(item.screen)}
            >
              <MuiIcon icon={item.icon} />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AspectRatio
