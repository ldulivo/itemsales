import { saveLayout } from '../../../utils/fileConfig'

export default async function handler (req, res) {
  const { body } = req
  console.log(body.layout)
  if (body === '') return res.status(400).json({ msg: 'Msg empty' })

  try {
    const myLayout = await saveLayout(body)
    return res.status(201).json(myLayout)
  } catch (error) {
    return res.status(400).json({ msg: 'This method is not supported' })
  }
}
