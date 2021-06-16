import { IPresentation } from 'store/types/presentation'
import { ISketch } from 'store/types/sketch'
import { IColor } from 'store/types/color'

export interface IApp {
  name?: string
  number?: Number
  color?: IColor
  presentation?: IPresentation
  sketch?: ISketch
  quote?: string
  slogan?: string
  showSlogan?: boolean
}