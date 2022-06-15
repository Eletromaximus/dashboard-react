import React, { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import Papa from 'papaparse'

function App () {
  const [parsedData, setParsedData] = useState()
  const [values, setValues] = useState([])
  const [tableRows, setTableRows] = useState([])

  function handleSelect (event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {
        console.log(results)
        const rowsArray: any = []
        const valuesArray: any = []

        results.data.map((data: any) => {
          rowsArray.push(Object.keys(data))
          return valuesArray.push(Object.values(data))
        })

        setParsedData(results.data)
        setTableRows(rowsArray[0])
        setValues(valuesArray)
      }
    })
  }

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <S.AppStyle>
      <S.HeaderStyle/>

      <S.MainStyle>
        {!parsedData && <form>
          <label htmlFor="file">Arquivo Csv</label>
          <input
            type="file"
            accept='document/*,.csv'
            onChange={handleSelect}
          />
          <input type="submit" value="Carregar" />
        </form>}

        {parsedData && <table>
            <thead>
              <tr>
                {tableRows.map((rows: any, index) => {
                  return <th key={index}>
                    {rows}
                  </th>
                })}
              </tr>
            </thead>

            <tbody>
              {values.map((value: any, index) => {
                return (
                  <tr key={index}>
                    {value.map((val: string, i: number) => {
                      return <td key={i}>
                        {val}
                      </td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        }
      </S.MainStyle>
    </S.AppStyle>
  )
}

export default App
