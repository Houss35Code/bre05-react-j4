import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (email && password) {
      setIsConnected(true)
    }
  }

  if (isConnected) {
    return <p>Vous êtes connecté</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Connexion</button>
    </form>
  )
}

export default Login