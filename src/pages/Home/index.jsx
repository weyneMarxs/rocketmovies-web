import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Content, ContainerInput } from './styles'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  function handleDetailsMovies(id) {
    navigate(`/details/${id}`)
  }
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])
  return (
    <Container>

      <Header element={<ContainerInput> {<FiSearch />} <input placeholder='Pesquisar pelo título' onChange={e => setSearch(e.target.value)} /></ContainerInput>}>
      </Header>

      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <Link to="/new"><FiPlus /> Adicionar filme</Link>
        </div>
        {
          movies.length > 0 ? movies.map(movie => (
            <Movie key={String(movie.id)} data={movie} onClick={() => handleDetailsMovies(movie.id)} />
          )) : <h3>Nenhum Filme Cadastrado !</h3>
        }
      </Content>
    </Container>
  )
}