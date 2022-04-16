import { dbConnect } from '../../../services/mongoose'
import productsSchema from '../../../services/models/product.models'

dbConnect()

export default async function handler(req, res) {

    const { method } = req;

    if (method === "GET") {

        try {
            const products = await productsSchema.count()
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    } else {
        return res.status(400).json({msg: "This method is not supported"})
    }
}