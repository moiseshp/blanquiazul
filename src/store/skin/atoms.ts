import { atom } from 'recoil'
import { ISkin } from 'store/types/skin'
import themes from 'utils/themes'
import tshirts from 'utils/tshirts'
import screens from 'utils/screens'

const defaultName = 'main'
const theme = themes.find(({ id }) => id === defaultName)
const tshirt = tshirts.find(({ id }) => id === defaultName)
const screen = screens.find(({ id }) => id === 'small')

const skin: ISkin = {
  name: 'FARFAN',
  number: 10,
  screen,
  theme,
  tshirt,
}

export const skinNameState = atom({
  key: 'skinName',
  default: skin.name
})

export const skinNumberState = atom({
  key: 'skinNumber',
  default: skin.number
})

export const skinTshirtState = atom({
  key: 'skinTshirt',
  default: skin.tshirt
})

export const skinThemeState = atom({
  key: 'skinTheme',
  default: skin.theme
})

export const skinScreenState = atom({
  key: 'skinScreen',
  default: skin.screen
})
