import React, { useEffect, useState } from 'react'
import { PageDashBoard } from './pages/PageDashBoard'
import { PageHome } from './pages/PageHome'
import * as S from './styles'

function App () {
  const [parsedData, setParsedData] = useState<any>()
  const [selectDashBoard, setSelectDashBoard] = useState(false)

  const Page = selectDashBoard === true
    ? <PageDashBoard />
    : <PageHome
        parsedData={parsedData}
        setParsedData={setParsedData}
      />

  useEffect(() => {
    if (parsedData) {
      setSelectDashBoard(!selectDashBoard)
    }
  }, [selectDashBoard])

  return (
    <S.AppStyle>
      <S.HeaderStyle/>

      <S.MainStyle>
        {Page}
      </S.MainStyle>
    </S.AppStyle>
  )
}

export default App
