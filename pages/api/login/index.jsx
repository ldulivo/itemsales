import jwt from 'jsonwebtoken'

const KEY = 'lsdkfsldkfhslkdfsldkfjsldkfjsldkfj'

export default async function handler (req, res) {
  if (!req.body) {
    res.status = 404
    res.end('Error')
    return
  }

  const { username, password } = req.body

  res.status(200).json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin'
      },
      KEY
    )
  })
}
