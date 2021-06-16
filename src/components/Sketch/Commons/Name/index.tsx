import { useRecoilState } from 'recoil'
import { appNameState } from 'store/app/atoms'
import { useStyles } from './Name.styles'

const Name = ({ color }: any) => {
  const [name] = useRecoilState(appNameState)
  const classes = useStyles({ color })
  return (
    <p className={classes.root}>{name}</p>
  )
}

export default Name
