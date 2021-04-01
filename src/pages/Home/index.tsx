import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import { useStyles } from './Home.styles'
import { useRecoilState } from 'recoil'
import { skinTshirtState, skinThemeState, skinScreenState } from 'store/skin/atoms'
import useBreakpoint from 'hooks/useBreakpoint'
import TshirtName from './TshirtName'
import TshirtNumber from './TshirtNumber'

const Home = () => {
  const [tshirt] = useRecoilState(skinTshirtState)
  const [theme] = useRecoilState(skinThemeState)
  const [screen] = useRecoilState(skinScreenState)
  const breakpoint = useBreakpoint()
  const classes = useStyles({ theme, screen, tshirt, breakpoint })
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <article className={classes.container}>
          <fieldset className={classes.tshirtWrapper}>
            <TshirtName />
            <TshirtNumber />
          </fieldset>
        </article>
      </main>
      <Sidebar />
    </div>
  )
}

export default Home