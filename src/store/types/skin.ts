import { ITheme } from 'store/types/theme'
import { ITshirt } from 'store/types/tshirt'

interface ISponsor {
  isActive?: boolean
  source?: string
}

export interface ISkin {
  name?: string
  number?: Number
  screen?: string | Number | '100%' | 800 | 360
  theme?: ITheme
  tshirt?: ITshirt
  sponsor?: ISponsor
}