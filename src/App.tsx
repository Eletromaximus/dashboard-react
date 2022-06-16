import React, { useEffect, useState } from 'react'
import { FileCapute } from './components/FileCapture'
import { SideBar } from './components/SideBar'
import * as S from './styles'

// interface IRows {
//   data_turno: string
//   turno: string
//   praca: string
//   'Campos Service': string
//   entregador: string
//   tipo: string
//   valor: number
//   descricao: string
// }

function App () {
  const [values, setValues] = useState<any[] | []>([])
  const [tableRows, setTableRows] = useState<string[] | []>([])
  const [prices, setPrices] = useState<number[]>()

  useEffect(() => {
    if (values.length > 0 && tableRows.length > 0) {
      const stringValues = values.map((item: any[]) => {
        return item[tableRows.findIndex((item) => {
          return item === 'valor'
        })]
      })
        .map((item: string) => {
          return parseFloat(item.replace(',', '.'))
        }, 0)

      setPrices(
        stringValues
      )
    }
  }, [values, tableRows])

  useEffect(() => {
    if (prices) {
      console.log(prices)
    }
  }, [prices])

  return (
    <S.AppStyle>
      <SideBar />

      <S.Container>

        <FileCapute
          setTableRows={setTableRows}
          setValues={setValues}
        />
      </S.Container>
    </S.AppStyle>
  )
}

export default App
