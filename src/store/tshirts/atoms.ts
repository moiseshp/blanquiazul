import { atom } from 'recoil'
import { ITshirt } from 'store/types/tshirt'
import tshirts from 'utils/tshirts'

const items: Array<ITshirt> = tshirts

export const tshirtsState = atom({
  key: 'appTshirts',
  default: items
})