import { useState } from 'react'
import FormContent from '../../../components/form/FormContent'
import FormError from '../../../components/form/FormError'

import FormContentStyle from '../../../styles/FormContent.module.css'

export default function ProductDetail ({ id, URL }) {
  const [errors, setErrors] = useState({})
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
    stock: 0
  })

  const handleChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const err = validate()
    if (Object.keys(err).length) return setErrors(err)

    await createProduct()

    /**
         * limpia formulario
         */
    for (let index = 0; index < (e.target.length - 1); index++) {
      e.target[index].value = ''
    }

    /**
         * Reiniciar variable
         */
    setErrors({})
    setNewProduct({
      title: '',
      description: '',
      price: 0,
      stock: 0
    })
  }

  const createProduct = async () => {
    const PostURL = `${URL}/api/products`

    try {
      await fetch(PostURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const validate = () => {
    const errors = {}

    if (!newProduct.title) errors.title = 'Título requerido'
    if (!newProduct.description) errors.description = 'Descripción requerida'
    if (!newProduct.price) errors.price = 'Precio requerido'
    if (!newProduct.stock) errors.stock = 'Stock requerida'

    return errors
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

export async function getServerSideProps ({ query: { id } }) {
  const URL = process.env.SERVER

  return {
    props: {
      id,
      URL
    }
  }
}
