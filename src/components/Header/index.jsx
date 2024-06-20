import { Container, Profile, Brand, UserName } from './styles.js'
import { ButtonText } from '../ButtonText'
import avatarUser from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api.js'
import { useAuth } from '../../hooks/auth.jsx'
import { useNavigate } from 'react-router-dom'

export function Header({ element }) {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarUser
  const navigate = useNavigate()
  function handleSignOut() {
    signOut()
    navigate('/')
  }
  return (
    <Container>
      <Brand>
        <h1>RocketMovies.</h1>
      </Brand>
      {element}
      <Profile>
        <div>
          <UserName to="/profile" >{user.name}</UserName>
          <ButtonText title="Sair" onClick={handleSignOut}></ButtonText>
        </div>
        <img src={avatarUrl} alt="foto do usuario" />
      </Profile>
    </Container>
  )
}