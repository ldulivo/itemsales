import { useEffect, useState } from 'react'
import PopUpStyles from '../styles/PopUp.module.css'
import FormContent from './form/FormContent'
import FormError from './form/FormError'

import FormContentStyle from '../styles/FormContent.module.css'

export default function PopUp ({ openClosePopUp, URL, listRefresh, edit = false, editProduct }) {
  /**
     * initial settings
     */
  const [errors, setErrors] = useState({})
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
    stock: 0
  })

  useEffect(() => {
    if (edit) {
      setNewProduct({
        title: editProduct.title,
        description: editProduct.description,
        price: editProduct.price,
        stock: editProduct.stock
      })
    }
  }, [])

  /**
     * listening input
     */
  const handleChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  /**
     * submit button
     */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // check submit
    const err = validate()
    if (Object.keys(err).length) return setErrors(err)

    /**
         * check edit
         */
    if (edit) {
      await updateProduct()
    } else {
      await createProduct()
    }

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

    listRefresh() // function refresh list
    openClosePopUp()
  }

  /**
     * send data for api rest
     */
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

  /**
     * Update product
     */
  const updateProduct = async () => {
    const id = editProduct._id
    const PutURL = `${URL}/api/products/${id}`

    try {
      await fetch(PutURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
    } catch (error) {
      console.error(error)
    }
  }

  /**
     * check data valid
     */
  const validate = () => {
    const errors = {}

    if (!newProduct.title) errors.title = 'Título requerido'
    if (!newProduct.description) errors.description = 'Descripción requerida'
    if (!newProduct.price) errors.price = 'Precio requerido'
    if (!newProduct.stock) errors.stock = 'Stock requerida'

    return errors
  }

  /**
     * return view form
     */
  return (
    <div className={PopUpStyles.PopUp}>

        <div onClick={ () => openClosePopUp()} className={PopUpStyles.close}></div>

        <div className={PopUpStyles.card}>
            <FormContent>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        className={ (errors.title) ? FormContentStyle.alert : '' }
                        placeholder="Título"
                        value={ newProduct.title}
                    />
                    <FormError err={errors.title} />

                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        className={ (errors.description) ? FormContentStyle.alert : '' }
                        placeholder="Descripción"
                        value={ newProduct.description}
                    />
                    <FormError err={errors.description} />

                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        className={ (errors.price) ? FormContentStyle.alert : '' }
                        placeholder="0"
                        value={ newProduct.price}
                    />
                    <FormError err={errors.price} />

                    <input
                        type="number"
                        name="stock"
                        onChange={handleChange}
                        className={ (errors.stock) ? FormContentStyle.alert : '' }
                        placeholder="0"
                        value={newProduct.stock}
                    />
                    <FormError err={errors.stock} />

                    <div className={PopUpStyles.buttons}>
                        <button
                            type="submit"
                            className={ edit ? PopUpStyles.buttonEdit : null}
                        >Agregar</button>

                        <button
                            onClick={ () => openClosePopUp()}
                            className={PopUpStyles.buttonCancel}
                        >Cancelar</button>
                    </div>

                </form>
            </FormContent>

        </div>
    </div>
  )
}
