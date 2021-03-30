import { skinNumberState } from 'store/skin/atoms'
import { useRecoilState } from 'recoil'
import { useStyles } from './TshirtNumber.styles'
import './tshirt-number-font.css'

const TshirtNumber = () => {
  const [number] = useRecoilState(skinNumberState)
  const classes = useStyles()
  return (
    <main className={`TshirtNumberFont ${classes.root}`}>
      {number}
    </main>
  )
}

export default TshirtNumber
