import { IColor } from './color'

export interface ITheme {
  id?: string
  color?: IColor
  isDark?: boolean
  name?: string
}