import { atom } from 'recoil'
import { IGlobal } from 'store/types/global'

const global: IGlobal = {
  sidebar: false,
  preview: false
}

export const globalSidebarState = atom({
  key: 'globalSidebar',
  default: global.sidebar
})

export const globalPreviewState = atom({
  key: 'globalPreview',
  default: global.preview
})