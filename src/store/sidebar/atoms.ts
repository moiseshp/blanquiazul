import { atom } from 'recoil'
import { ISidebar } from 'store/types/sidebar'

const sidebar: ISidebar = {
  isActive: false
}

export const sidebarIsActiveState = atom({
  key: 'sidebarIsActive',
  default: sidebar.isActive
})