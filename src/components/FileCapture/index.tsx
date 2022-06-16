import { ChangeEvent, useEffect, useState } from 'react'
import Papa from 'papaparse'

export function FileCapute () {
  const [values, setValues] = useState([])
  const [tableRows, setTableRows] = useState([])

  useEffect(() => {
    console.log(tableRows.length)
    if (tableRows.length > 0) {
      console.log(values)
      console.log(tableRows)
    }
  }, [tableRows])

  function handleSelect (event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {
        const rowsArray: any = []
        const valuesArray: any = []

        results.data.map((data: any) => {
          rowsArray.push(Object.keys(data))
          return valuesArray.push(Object.values(data))
        })
        setTableRows(rowsArray[0])
        setValues(valuesArray)
      }
    })
  }

  return (

    <form>
      <label htmlFor="file">Arquivo Csv</label>
      <input
        type="file"
        accept='document/*,.csv'
        onChange={handleSelect}
      />
      <input type="submit" value="Carregar" />
    </form>
  )
}
