import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useStyles } from './Home.styles'
import { useRecoilState } from 'recoil'
import { skinThemeState, skinScreenState } from 'store/skin/atoms'
import tshirtImage from 'images/TShirt-sponsors-1159x1500.png'
import TshirtName from './TshirtName'
import TshirtNumber from './TshirtNumber'

const Home = () => {
  const [theme] = useRecoilState(skinThemeState)
  const [screen] = useRecoilState(skinScreenState)
  const classes = useStyles({ theme, screen })
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <article className={classes.container}>
          <fieldset
            className={classes.tshirtWrapper}
            style={{ backgroundImage: `url(${tshirtImage})`}}  
          >
            <header className={classes.title}>
              <strong>{(new Date()).getFullYear()} &copy; </strong> {process.env.REACT_APP_NAME}
            </header>
            <TshirtName />
            <TshirtNumber />
          </fieldset>
        </article>
      </main>
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Home