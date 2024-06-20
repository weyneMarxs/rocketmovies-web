import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: 250px auto; */
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header header"
    "content content"
    "content content"
    "content content";
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const ContainerInput = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  overflow-y: auto;
  border-radius: 10px;
  > svg {
    margin-left: 16px;
  }
  >input {
    width: 50%;
    height: 56px;
    padding: 16px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

  }

// export const InputSearch = styled.input`
//     width: 500px;
//     height: 56px;
//     background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
//     color: ${({theme}) => theme.COLORS.WHITE};
//     border: none;
//     border-radius: 10px;
//     padding: 19px 24px;
// `

export const Content = styled.div`
  grid-area: content;
  padding: 0px 64px;
  overflow-y: auto;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 50px 0 40px;
    }
    a {
      /* width: 207px;
      height: 48px; */
      padding: 13.5px 32px;
      background-color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 10px;
      text-align: center;
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
  }
`