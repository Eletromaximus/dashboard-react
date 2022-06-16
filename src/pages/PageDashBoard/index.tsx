import * as S from './styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TimelineIcon from '@mui/icons-material/Timeline'
import { Navbar } from '../../components/Navbar'
// import { ChangeEvent, useState } from 'react'
// import Papa from 'papaparse'
import {
  DataGrid,
  GridRowsProp,
  GridColDef
} from '@mui/x-data-grid'

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'MUI X', col2: 'is awesome' },
  { id: 3, col1: 'Material UI', col2: 'is amazing' },
  { id: 4, col1: 'MUI', col2: '' },
  { id: 5, col1: 'Joy UI', col2: 'is awesome' },
  { id: 6, col1: 'MUI Base', col2: 'is amazing' }
]

const columns: GridColDef[] = [
  { field: 'id', hide: true },
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 }
]

export function PageDashBoard () {
  // const [parsedData, setParsedData] = useState<any>()
  // const [values, setValues] = useState([])
  // const [tableRows, setTableRows] = useState([])

  // function handleSelect (event: ChangeEvent<HTMLInputElement>) {
  //   if (!event.target.files) {
  //     return
  //   }

  //   Papa.parse(event.target.files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: (results: any) => {
  //       console.log(results)
  //       const rowsArray: any = []
  //       const valuesArray: any = []

  //       results.data.map((data: any) => {
  //         rowsArray.push(Object.keys(data))
  //         return valuesArray.push(Object.values(data))
  //       })

  //       setParsedData([...results.data])
  //       setTableRows(rowsArray[0])
  //       setValues(valuesArray)
  //     }
  //   })
  // }

  return (
    <S.DashBoardPageStyle>
      <Navbar />
      <S.SideBarStyle>
        <h1>Logo</h1>

        <div className="options">
          <ul>
            <li>
              <DashboardIcon />
              <span>Main</span>
            </li>

            <li>
              <TimelineIcon />
              <span>Table</span>
            </li>
          </ul>
        </div>
      </S.SideBarStyle>

      {/* {!parsedData && <form>
        <label htmlFor="file">Arquivo Csv</label>
        <input
          type="file"
          accept='document/*,.csv'
          onChange={handleSelect}
        />
        <input type="submit" value="Carregar" />
        </form>
      } */}
{/*
      {parsedData && */}
      <div style={{ height: '300px', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      {/* } */}
    </S.DashBoardPageStyle>
  )
}
