import { atom } from 'recoil'
import { ITheme } from 'store/types/theme'
import themes from 'utils/themes'

const items: Array<ITheme> = themes

export const themesState = atom({
  key: 'appThemes',
  default: items
})