import { dbConnect } from '../../../services/mongoose'
import productsSchema from '../../../services/models/product.models'

dbConnect()

export default async function handler(req, res) {

    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const products = await productsSchema.find();
                return res.status(200).json(products);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }

        case "POST":
            try {
                const newProduct = new productsSchema(body);
                const saveProduct = await newProduct.save();
                return res.status(201).json(saveProduct);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
    
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}