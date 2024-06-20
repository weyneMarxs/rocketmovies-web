import { Container } from './styles.js'
import { Genres } from '../Genres'
import { StarRating } from '../StarRating'

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <StarRating rating={data.rating} />
      <p>{data.sinopses}</p>
      {
        data.genres &&
        <footer>
          {
            data.genres.map(genre => <Genres key={genre.id} title={genre.name} />)
          }
        </footer>
      }
    </Container>
  )
}