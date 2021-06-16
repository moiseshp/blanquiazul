import { atom } from 'recoil'
import { IApp } from 'store/types/app'
import presentations from 'utils/data/presentations'
import sketches from 'utils/data/sketches'
import colors from 'utils/data/colors'

const presentation = presentations.find(({ id }) => id === 'secondary')
const sketch = sketches.find(({ id }) => id === 'main')
const color = colors.find(({ id }) => id === 'grey')
const name = 'FARFAN'
const number = 10
const quote = '¡ARRIBA ALIANZA!'
const slogan = '120 AÑOS'
const showSlogan = true
const app: IApp = {
  name,
  number,
  color,
  presentation,
  sketch,
  quote,
  slogan,
  showSlogan
}

export const appNameState = atom({
  key: 'appName',
  default: app.name
})

export const appNumberState = atom({
  key: 'appNumber',
  default: app.number
})

export const appPresentationState = atom({
  key: 'appPresentation',
  default: app.presentation
})

export const appSketchState = atom({
  key: 'appSketch',
  default: app.sketch
})

export const appColorState = atom({
  key: 'appColor',
  default: app.color
})

export const appQuoteState = atom({
  key: 'appQuote',
  default: app.quote
})

export const appSloganState = atom({
  key: 'appSlogan',
  default: app.slogan
})

export const appShowSloganState = atom({
  key: 'appShowSlogan',
  default: app.showSlogan
})