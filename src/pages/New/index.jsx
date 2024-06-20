import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/InputText'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ToasterAlert } from '../../components/Toaster'

import { FiArrowLeft } from 'react-icons/fi'
import { toast } from 'sonner'
import { api } from '../../services/api'
export function New() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [sinopses, setSinopses] = useState('')
  const [rating, setRating] = useState('')

  const [genres, setGenres] = useState([])
  const [newGenre, setNewGenre] = useState('')

  function handleAddGenre() {
    setGenres(prevState => [...prevState, newGenre])
    setNewGenre('')
  }
  function handleRemoveGenre(deleted) {
    setGenres(prevState => prevState.filter(genre => genre !== deleted))
  }
  async function handleSaveMovie() {
    if (!title || !sinopses) {
      return toast.warning('Preencha todos os campos !')
    }
    if (newGenre) {
      return toast.warning('Você preencheu um gênero porém não adicionou !')
    }
    await api.post('/movies', {
      title,
      sinopses,
      rating,
      genres
    }).then((Response) => {
      toast.success('Filme Adicionado com sucesso !')
      setTimeout(() => {
        handleBack()
      }, 1000)
    })
  }
  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft /> voltar</Link>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input placeholder="Título" onChange={e => setTitle(e.target.value)}></Input>
            <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)}></Input>
          </div>
          <Textarea placeholder="Observações" onChange={e => setSinopses(e.target.value)} />
          <Section title="Marcadores">
            <div className="genres">
              {
                genres.map((genre, index) => (
                  <NoteItem key={String(index)} value={genre} onClick={() => { handleRemoveGenre(genre) }} />
                ))
              }
              <NoteItem isNew placeholder="Gênero" value={newGenre} onChange={e => setNewGenre(e.target.value)} onClick={handleAddGenre} />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleSaveMovie} />
        </Form>
      </main>
      <ToasterAlert />
    </Container>
  )
}