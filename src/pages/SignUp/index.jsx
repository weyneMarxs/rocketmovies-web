import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { toast } from 'sonner'
import { api } from '../../services/api'

import { Input } from '../../components/InputText'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { ToasterAlert } from '../../components/Toaster'
export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSignUp() {
    if (!name || !email || !password) {
      toast.warning('Preencha Todos os Campos.')
      return
    }
    api.post('/users', { name, email, password }).then(() => {
      toast.success('Usuário Cadastrado com Sucesso.')
      setTimeout(() => {
        handleBack()
      }, 1000)
    }).catch((error => {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possivel cadastrar.')
      }
    }))
  }

  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>
      <Background></Background>
      <Form>
        <h1>RocketMovies.</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}></Input>
        <Button title="Cadastrar" onClick={handleSignUp}></Button>

        <ButtonText onClick={handleBack} title="Voltar"></ButtonText>
      </Form>
      <ToasterAlert />
    </Container>
  )
}