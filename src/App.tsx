import React, { useEffect, useState } from 'react'
import { Chart } from './components/Chart'
import { FileCapute } from './components/FileCapture'
import { SideBar } from './components/SideBar'
import * as S from './styles'

function App () {
  const [values, setValues] = useState<any[] | []>([])
  const [tableRows, setTableRows] = useState<string[] | []>([])
  const [prices, setPrices] = useState<number []>()
  const [dataTurnos, setDataTurnos] = useState<string[]>([])

  useEffect(() => {
    if (values.length > 0 && tableRows.length > 0) {
      const stringValues = values.map((item) => {
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

      setDataTurnos(
        values.map((item) => {
          return item[tableRows.findIndex((item) => {
            return item === 'data_turno'
          })]
        })
      )
    }
  }, [values, tableRows])

  return (
    <S.AppStyle>
      <SideBar />

      <S.Container>

        {!prices && <FileCapute
          setTableRows={setTableRows}
          setValues={setValues}
        />}

        {dataTurnos && prices && <Chart
          dataTurnos={dataTurnos}
          prices={prices}
        />}
      </S.Container>
    </S.AppStyle>
  )
}

export default App
