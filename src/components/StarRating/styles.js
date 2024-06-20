import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  > svg {
    color: ${({theme}) => theme.COLORS.PINK};
    margin: 8px  0 15px;
  }
`