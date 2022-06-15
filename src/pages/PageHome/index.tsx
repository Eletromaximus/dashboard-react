import Papa from 'papaparse'
import { ChangeEvent, Dispatch, useState } from 'react'

interface IPageHome {
  parsedData: any,
  setParsedData: Dispatch<any>
}

export function PageHome ({
  parsedData,
  setParsedData
}: IPageHome) {
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

        setParsedData((prev: any) => [...prev, results.data])
        setTableRows(rowsArray[0])
        setValues(valuesArray)
      }
    })
  }

  return (
    <>
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
    </>
  )
}
