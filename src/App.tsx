import React from 'react'
import { Navbar } from './components/Navbar'
import { SideBar } from './components/SideBar'
// import { PageDashBoard } from './pages/PageDashBoard'

import * as S from './styles'

function App () {
  return (
    <S.AppStyle>
      <Navbar />
      <SideBar />
    </S.AppStyle>
  )
}

export default App
