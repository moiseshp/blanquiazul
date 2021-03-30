import { atom } from 'recoil'
import { ISidebar } from 'store/types/sidebar'

const sidebar: ISidebar = {
  isActive: false,
  width: 300
}

export const sidebarIsActiveState = atom({
  key: 'sidebarIsActive',
  default: sidebar.isActive
})

export const sidebarWidthState = atom({
  key: 'sidebarWidth',
  default: sidebar.width
})