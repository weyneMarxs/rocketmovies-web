import { Container } from "./styles";

export function Genres({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </ Container>
  )
}