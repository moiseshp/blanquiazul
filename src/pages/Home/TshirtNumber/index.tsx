import { skinNumberState, skinScreenState } from 'store/skin/atoms'
import { useRecoilState } from 'recoil'
import { useStyles } from './TshirtNumber.styles'

const TshirtNumber = () => {
  const [number] = useRecoilState(skinNumberState)
  const [screen] = useRecoilState(skinScreenState)
  const classes = useStyles({ screen })
  return (
    <main className={classes.root}>
      {number}
    </main>
  )
}

export default TshirtNumber
