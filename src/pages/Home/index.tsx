import { useRef, useState } from 'react'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useStyles } from './Home.styles'
import { useRecoilState } from 'recoil'
import { skinThemeState, skinNameState, skinNumberState } from 'store/skin/atoms'
import { ITheme } from 'store/types/theme'
import tshirtImage from 'images/TShirt-sponsors-1159x1500.png'
import './tshirt-number-font.css'

import useResizeObserver from 'use-resize-observer'
const tshirtWidthDefault = 1159
const tshirtHeightDefault = 1500
interface IProps {
  theme: ITheme,
  tshirtWidth: any
}
const Home = () => {
  const [theme] = useRecoilState(skinThemeState)
  const [tshirtWidth, setTshirtWidth] = useState<Number|undefined>(tshirtWidthDefault)
  const tshirtRef = useRef<HTMLFieldSetElement>(null)
  const [name] = useRecoilState(skinNameState)
  const [number] = useRecoilState(skinNumberState)
  useResizeObserver<HTMLFieldSetElement>({
    ref: tshirtRef,
    onResize: ({ height }) => {
      if (height) {
        const newWidth = (height * tshirtWidthDefault) / tshirtHeightDefault
        setTshirtWidth(newWidth)        
      }
    }
  })
  const classes = useStyles({ theme, tshirtWidth } as IProps)

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <article className={classes.container}>
          <header className={classes.headingWrapper}>
            <h1 className={classes.title}>
              <strong>
                {(new Date()).getFullYear()} &copy;
              </strong> {process.env.REACT_APP_NAME}
            </h1>
          </header>
          <fieldset className={classes.tshirtWrapper} ref={tshirtRef}>
            <div
              className={classes.tshirt}
              style={{ backgroundImage: `url(${tshirtImage})`}}  
            >
              <main style={{
                position: 'absolute',
                top: '210px',
                left: '50%',
                color: '#E12921',
                fontSize: '65px',
                fontFamily: 'Squada One',
                textShadow: '2px 2px 2px #FFF',
                transform: 'translate(-50%, -50%)'
              }}>
                {name}
              </main>
              <main 
                className="TshirtNumberFont"
                style={{
                  position: 'absolute',
                  top: '370px',
                  color: '#E12921',
                  left: '50%',
                  fontSize: '290px',
                  textShadow: '1px 2px 2px #FFF',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {number}
              </main>

            </div>
            <div className={classes.tshirtShadow} />
          </fieldset>
          <footer className={classes.headingWrapper} style={{ bottom: 0 }}>
            <h1 className={classes.title} style={{ fontSize: 14 }}>
              <strong>@moiseshp</strong>
            </h1>
          </footer>
        </article>
      </main>
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Home