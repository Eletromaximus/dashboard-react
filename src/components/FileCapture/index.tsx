import Papa from 'papaparse'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FormStyle } from './styles'

interface IFileCapture {
  setValues: Dispatch<SetStateAction<any[] | []>>
  setTableRows: Dispatch<SetStateAction<string[] | []>>
}

export function FileCapute ({
  setValues,
  setTableRows
}: IFileCapture) {
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
        if (rowsArray && valuesArray && valuesArray !== undefined) {
          setTableRows(rowsArray[0])
          setValues(valuesArray)
        }
      }
    })
  }

  return (
    <FormStyle>
      <label htmlFor="file">Arquivo Csv</label>
      <input
        type="file"
        accept='document/*,.csv'
        onChange={handleSelect}
      />
      <input type="submit" value="Carregar" />
    </FormStyle>
  )
}
