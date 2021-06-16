import React from 'react'
import ReactGA from 'react-ga'
import { RecoilRoot } from 'recoil'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Spinner from 'components/Spinner'

const Home = React.lazy(() => import('./pages/Home'))

const App = () => {
  const muiTheme = createMuiTheme({ ...theme })

  React.useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || '')
    ReactGA.pageview(window.location.pathname)
  }, [])
  
  return(
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      <CssBaseline />
      <RecoilRoot>
        <React.Suspense fallback={<Spinner />}>
          <Home />
        </React.Suspense>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App