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
import * as S from './styles'

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
  dataTurnos: string[],
  titles: string[]
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
  const moneyLocale = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
  <S.ChartStyle>
    <S.WidgetsBar>
      <S.WidgetStyle>
          <span className="title">
            Total Arrecadado
          </span>

          <span className="counter">
            {moneyLocale.format(prices.reduce((prev, current) => {
              return prev + current
            }))}
          </span>
        </S.WidgetStyle>
    </S.WidgetsBar>

    <div style={{
      display: 'flex',
      width: 700,
      height: 500
    }}>
        <Bar
          options={options}
          data={data}
        />
      </div>
    </S.ChartStyle>
  )
}
