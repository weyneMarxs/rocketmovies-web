import { Container } from './styles.js'
import { FaRegStar, FaStar } from "react-icons/fa";

export function StarRating({ rating }) {
  const starIcons = Array(5).fill(null).map((_, index) => (
    index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
  ));

  return (
    <Container $rating={rating}>
      {starIcons}
    </Container>
  )
}