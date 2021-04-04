import React from 'react'
import { useStyles } from './Home.styles'
import { useRecoilState } from 'recoil'
import { Box } from '@material-ui/core'
import { skinTshirtState, skinThemeState, skinScreenState } from 'store/skin/atoms'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import useBreakpoint from 'hooks/useBreakpoint'
import TshirtName from './TshirtName'
import TshirtNumber from './TshirtNumber'
import Preloader from 'components/Preloader'
import screens from 'utils/screens'
import { mobileCheck } from 'utils/helpers'
import 'fonts/croatia/NikeCroatia2020.css'

const Home = () => {
  const [tshirt] = useRecoilState(skinTshirtState)
  const [theme] = useRecoilState(skinThemeState)
  const [screen, setScreen] = useRecoilState(skinScreenState)
  const breakpoint = useBreakpoint()
  const classes = useStyles({ breakpoint, theme, tshirt, screen })
  const htmlDivElementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let screenId = 'desktop'
    if (mobileCheck()) screenId = 'mobile'
    const getScreen = screens.find(item => item.id === screenId)
    setScreen(getScreen)
  }, [setScreen])

  if (!screen) {
    return <Preloader />
  }

  return (
    <React.Fragment>
      <Header />
      <Box
        height="100vh" 
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.content}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.container} 
          height={breakpoint === 'xs' ? '100%' : screen?.height}
          width={breakpoint === 'xs' ? '100%' : screen?.width}
          {...{ ref: htmlDivElementRef } as any}
        >
          <Box 
            height={screen?.tshirt.height}
            width={screen?.tshirt.width}
            className={classes.tshirtWrapper}
          >
            <TshirtName />
            <TshirtNumber />
          </Box>
        </Box>
      </Box>
      <Sidebar htmlDivElementRef={htmlDivElementRef} />
    </React.Fragment>
  )
}

export default Home