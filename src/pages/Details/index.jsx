import { toast } from 'sonner'
import moment from 'moment'
import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Genres } from '../../components/Genres'
import { StarRating } from '../../components/StarRating'
import { Button } from '../../components/Button'
import { ToasterAlert } from '../../components/Toaster'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import avatarUser from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function Details() {
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarUser

  async function handleRemove() {
    const confirm = window.confirm('Deseja remover o filme ?')
    if (confirm) {
      await api.delete(`/movies/${params.id}`).then((response) => {
        toast.success('Nota removida com sucesso !')
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }).catch(error => {
        toast.error(error)
      })
    }
  }

  function handleBack() {
    navigate(-1)
  }
  useEffect(() => {
    async function fetchMovie() {
      await api.get(`/movies/${params.id}`).then(response => {
        setData(response.data)

      }).catch(error => {
        toast.error(error)
      })
    }
    fetchMovie()
  }, [])
  return (
    <Container>
      <Header />
      {data &&
        <main>
          <Content>
            <header>
              <Link onClick={handleBack}><FiArrowLeft /> Voltar</Link>
              <div className="title">
                <h1>{data.title}</h1>
                <StarRating rating={data.rating} />
              </div>
              <div className="info">
                <p><img src={avatarUrl} alt="" /> Por {user.name}</p>
                <span><FiClock /> {moment(data.created_at, 'YYYY-MM-DD HH:mm').format('DD/MM/YY [às] HH:mm')}</span>
              </div>
            </header>
            <div className="tags">
              {
                data.genres.map(genre => (
                  <Genres key={String(genre.id)} title={genre.name}></Genres>
                ))
              }
            </div>
            <p>{data.sinopses}</p>
            <Button title="Excluir" onClick={handleRemove}></Button>
          </Content>
        </main>
      }
      <ToasterAlert />
    </Container>

  )
}