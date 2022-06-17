import styled from '@emotion/styled'

export const WidgetStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  height: 100px;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);


  .title {
      font-weight: bold;
      font-size: 18px;
      color: rgb(160, 160, 160);
    }

    .counter {
      font-size: 28px;
      font-weight: 300;
    }
`
export const ChartStyle = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const WidgetsBar = styled.div`
  flex-wrap: wrap;
  height: 150px;
  width: 100%;
  justify-content: space-between;
`
