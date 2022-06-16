import { SideBarStyle } from './styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TimelineIcon from '@mui/icons-material/Timeline'

export function SideBar () {
  return (
    <SideBarStyle>
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
  </SideBarStyle>
  )
}
