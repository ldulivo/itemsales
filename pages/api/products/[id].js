import { dbConnect } from '../../../services/mongoose'
import productsSchema from '../../../services/models/product.models'

dbConnect()

export default async function handler (req, res) {
  const { method, body, query: { id } } = req

  switch (method) {
    case 'GET':
      try {
        const product = await productsSchema.findById(id)
        if (!product) return res.status(404).json({ msg: 'ID not found' })
        return res.status(200).json(product)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'PUT':
      try {
        const product = await productsSchema.findByIdAndUpdate(id, body, {
          new: true
        })
        if (!product) return res.status(404).json({ msg: 'ID not found' })
        return res.status(200).json(product)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'DELETE':
      try {
        const deletedProduct = await productsSchema.findByIdAndDelete(id)
        if (!deletedProduct) return res.status(404).json({ msg: 'ID not found' })
        return res.status(204).json()
      } catch (error) {
        return res.status(400).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'This method is not supported' })
  }
}
