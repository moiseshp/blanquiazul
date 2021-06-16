import { useRecoilState } from 'recoil'
import { appNumberState } from 'store/app/atoms'
import { useStyles } from './Number.styles'

const Number = ({ color }: any) => {
  const [number] = useRecoilState(appNumberState)
  const classes = useStyles({ color })
  return (
    <p className={classes.root}>{number}</p>
  )
}

export default Number
