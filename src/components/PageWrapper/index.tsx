import { ReactNode } from 'react'
import * as S from './styles'

interface IPageWrapper {
  content: ReactNode
}

export function PageWrapper ({ content }: IPageWrapper) {
  // const [values, setValues] = useState([])
  // const [tableRows, setTableRows] = useState([])

  return (
    <S.PageWrapperStyle>
      {content}
    </S.PageWrapperStyle>
  )
}
