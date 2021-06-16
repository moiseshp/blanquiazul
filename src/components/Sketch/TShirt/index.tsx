import React from 'react'
import { useRecoilState } from 'recoil'
import { appPresentationState, appShowSloganState } from 'store/app/atoms'
import { Box } from '@material-ui/core'
import Watermarking from 'components/Sketch/Commons/Watermarking'
import Isotype from 'components/Sketch/Commons/Isotype'
import Quote from 'components/Sketch/Commons/Quote'
import Number from 'components/Sketch/Commons/Number'
import Name from 'components/Sketch/Commons/Name'
import './index.css'
import { useStyles } from './TShirt.styles'

const BasicTShirt = () => {
  const [presentation] = useRecoilState(appPresentationState)
  const [showSlogan] = useRecoilState(appShowSloganState)
  const [loading, setLoading] = React.useState<boolean>(true)
  const handleImage = () => setLoading(false)
  const classes = useStyles({ presentation })
  return (
    <>
      <Box 
        className={classes.container}
        color="white"
        textAlign="center"
      >
        {showSlogan && (
          <>
            <Box mb={{ xs:2, md: 3 }}>
              <Isotype />
            </Box>
            <Box mb={{ xs: 2.5, md: 4 }}>
              <Quote />
            </Box>
          </>
        )}
        <Box position="relative">
          <img
            src={`${process.env.PUBLIC_URL}/images/${presentation?.source}`}
            alt={presentation?.source}
            width="100%"
            height="auto"
            onLoad={handleImage}
          />
          <Box visibility={loading ? 'hidden' : 'visible'}>
            <Box className={classes.name}>
              <Name />
            </Box>
            <Box className={classes.number}>
              <Number />
            </Box>
            <Box position="absolute" width="100%" bottom={15} zIndex={0}>
              <Watermarking />
            </Box>
          </Box>
        </Box>
        <Box className={classes.shadow} />
      </Box>
    </>
  )
}

export default BasicTShirt
