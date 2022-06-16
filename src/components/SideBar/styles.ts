import styled from '@emotion/styled'

export const SideBarStyle = styled.div`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 200px;
  margin: 0;
  padding: 0;
  border-right: 1px solid;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      padding: 5px;
      cursor: pointer;

      &:hover {
        background-color: #ece8ff;
      }

      span{
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }
  `
