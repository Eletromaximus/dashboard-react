import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: brown;
`
export const AppStyle = styled.div`
  flex-direction: column;
  width: 100%;
`

export const MainStyle = styled.div`
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    
    margin-top: 80px;
    justify-content: space-between;
    text-align: center;
    width: 200px;
    height: 200px;
    border: dotted;
  }
  
  table {
    width: 100%;
    border: 1px solid;
    text-align: center;
  }
`
