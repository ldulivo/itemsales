import { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function Index () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('your not logged')

  const [secret, setSecret] = useState('')

  const submitForm = async (e) => {
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((t) => t.json())

    const token = res.token
    // console.log('decode', jwt.decode(token), ' token puro: ', token);

    if (token) {
      const json = jwt.decode(token)
      setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin!' : 'not an admin!'}`)

      res = await fetch('/api/login/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
        .then((t) => t.json())

      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode)
      } else {
        setSecret('Nothing available')
      }
    } else {
      setMessage('Something went wrong')
    }
  }

  return (
    <div>
        <h1>{message}</h1>
        <h2>Secret: {secret}</h2>
        <form>
            <input
                type="text"
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input type={'button'} value="Login" onClick={submitForm}/>
        </form>
    </div>
  )
}
