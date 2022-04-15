import { useState } from "react"
import FormContent from "../../components/form/FormContent"
import FormError from "../../components/form/FormError"

import FormContentStyle from '../../styles/FormContent.module.css'

export default function Dashboard() {

    const [errors, setErrors] = useState({})
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: 0,
        stock: 0
    })

    const handleChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault();

        let err = validate();
        if (Object.keys(err).length) return setErrors(err)

        setErrors({})
        console.log("submiting", newProduct);
        /**
         * limpia formulario
         */
        for (let index = 0; index < (e.target.length - 1); index++) {
            e.target[index].value="";
        }
    }

    const validate = () => {
        const errors = {}

        if (!newProduct.title) errors.title = "Título requerido";
        if (!newProduct.description) errors.description = "Descripción requerida";
        if (!newProduct.price) errors.price = "Precio requerido";
        if (!newProduct.stock) errors.stock = "Stock requerida";

        /* !newProduct.title ? errors.title = "Título requerido" : null;
        !newProduct.description ? errors.description = "Descripción requerida" : null;
        !newProduct.price ? errors.price = "Precio requerido" : null;
        !newProduct.stock ? errors.stock = "Stock requerida" : null; */

        return errors;
    }

  return (
    <div>
        <h2>dashboard</h2>
        <FormContent>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Título" 
                    onChange={handleChange}
                    className={ (errors.title) ? FormContentStyle.alert : '' }
                />
                <FormError err={errors.title} />

                <input 
                    type="text" 
                    name="description" 
                    placeholder="Descripción" 
                    onChange={handleChange} 
                    className={ (errors.description) ? FormContentStyle.alert : '' }
                />
                <FormError err={errors.description} />

                <input 
                    type="number" 
                    name="price" 
                    placeholder="0" 
                    onChange={handleChange} 
                    className={ (errors.price) ? FormContentStyle.alert : '' }
                />
                <FormError err={errors.price} />

                <input 
                    type="number" 
                    name="stock"
                    placeholder="0" 
                    onChange={handleChange} 
                    className={ (errors.stock) ? FormContentStyle.alert : '' }
                />
                <FormError err={errors.stock} />

                <button type="submit">Agregar</button>

            </form>
        </FormContent>
    </div>
  )
}
