import React, { lazy, Suspense } from 'react'
import { Box, CircularProgress, Hidden } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { appColorState } from 'store/app/atoms'
import { useStyles } from './Home.styles'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import PreviewButton from './PreviewButton'
import DownloadButton from './DownloadButton'
const TShirt = lazy(() => import('components/Sketch/TShirt'))
const Home = () => {
  const [color] = useRecoilState(appColorState)
  const classes = useStyles({ color })
  const refCanvasElement = React.useRef<HTMLElement>(null)

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.container}
        {...{ ref: refCanvasElement }}
      >
        <Suspense fallback={<CircularProgress className={classes.spinner} />}>
          <TShirt />
        </Suspense>
      </Box>
      <Sidebar refCanvasElement={refCanvasElement} />
      <Hidden smUp>
        <DownloadButton refCanvasElement={refCanvasElement} />
        <PreviewButton />
      </Hidden>
    </>
  )
}

export default Home