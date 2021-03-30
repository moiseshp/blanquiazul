import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useStyles } from './Home.styles'
import { useRecoilState } from 'recoil'
import { skinThemeState } from 'store/skin/atoms'
import { ITheme } from 'store/types/theme'
import tshirtImage from 'images/TShirt-sponsors-1159x1500.png'
import TshirtName from './TshirtName'
import TshirtNumber from './TshirtNumber'
interface IProps {
  theme: ITheme
}
const Home = () => {
  const [theme] = useRecoilState(skinThemeState)
  const classes = useStyles({ theme } as IProps)

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
            <footer className={classes.footer}>@moiseshp</footer>
          </fieldset>
        </article>
      </main>
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Home