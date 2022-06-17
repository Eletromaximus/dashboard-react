import {
  Bar
} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Valores vs Datas dos turnos'
    }
  }
}

interface IChart {
  prices: number[],
  dataTurnos: string[]
}

export function Chart ({
  dataTurnos,
  prices
}: IChart) {
  const data = {
    labels: dataTurnos,
    datasets: [
      {
        label: 'Valores',
        data: prices,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  return (
  <div style={{
    width: 700
  }}>
      <Bar
        options={options}
        data={data}
      />
    </div>
  )
}
