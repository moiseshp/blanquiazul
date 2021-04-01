import { ITheme } from 'store/types/theme'
import { ITshirt } from 'store/types/tshirt'

interface IScreen {
  id?: string
  width?: Number | string
  height?: Number | string
  icon?: string
  tshirt: {
    paddingTop?: Number
    height?: Number | string
    width?: Number | string
    marginTop?: Number | string
    marginLeft?: Number | string
  }
}

export interface ISkin {
  name?: string
  number?: Number
  screen?: IScreen
  theme?: ITheme
  tshirt?: ITshirt
}