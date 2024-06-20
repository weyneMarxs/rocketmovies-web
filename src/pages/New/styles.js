import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    /* background-color: ${({theme}) => theme.COLORS.BACKGROUND_600}; */
    /* background-color: ${({theme}) => theme.COLORS.PINK}; */
    border-radius: 10px;
    padding: 16px;
  }
`

export const Form = styled.form`
  width: 1113px;;
  margin: 38px auto;
  > header {
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    a {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
    h1 {
      margin: 24px 0 40px;
    }
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }
`