import { readLayout } from '../../../utils/fileConfig'

export default async function handler (req, res) {
  try {
    const myLayout = await readLayout()
    return res.status(200).json({ layout: myLayout.layout })
  } catch (error) {
    return res.status(400).json({ msg: 'This method is not supported' })
  }
}
