import * as S from './styles'
import { Navbar } from '../../components/Navbar'
import { FileCapute } from '../../components/FileCapture'
import { SideBarStyle } from '../../components/SideBar/styles'

export function PageDashBoard () {
  return (
    <S.DashBoardPageStyle>
      <Navbar />

      <SideBarStyle/>

      <FileCapute />
    </S.DashBoardPageStyle>
  )
}
