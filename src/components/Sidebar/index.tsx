import { Box, Drawer, Divider } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { globalSidebarState } from 'store/global/atoms'
import { appShowSloganState } from 'store/app/atoms'
import { useStyles } from './Sidebar.styles'
import Header from './Header'
import Footer from './Footer'
import SloganCheckbox from './SloganCheckbox'
import Slogan from './Slogan'
import Quote from './Quote'
import Name from './Name'
import Number from './Number'
import Tshirt from './Tshirt'
import Color from './Color'

type TProps = {
  refCanvasElement: React.RefObject<HTMLElement>
}

const Sidebar = ({ refCanvasElement }: TProps) => {
  const [sidebar] = useRecoilState(globalSidebarState)
  const [showSlogan] = useRecoilState(appShowSloganState)
  const classes = useStyles()
  return (
    <Drawer
      variant="persistent"
      open={sidebar}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <Header />
      <Box className={classes.box}>
        <SloganCheckbox />
        <Divider />
        {showSlogan && (
          <>
            <Slogan />
            <Divider />
            <Quote />
            <Divider />
          </>
        )}
        <Name />
        <Divider />
        <Number />
        <Divider />
        <Tshirt />
        <Divider />
        <Color />
      </Box>
      <Footer refCanvasElement={refCanvasElement} />
    </Drawer>
  )
}

export default Sidebar
