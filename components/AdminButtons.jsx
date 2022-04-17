import AdminButtonsStyles from '../styles/AdminButtons.module.css'

import SvgEdit from './svg/SvgEdit'
import SvgTrash from './svg/SvgTrash'
import SvgView from './svg/SvgView'


export default function AdminButtons({id, active, URL, listRefresh, openClosePopUp, setEditPopUp, product}) {
  
  /**
   * function delete product (state delete = false)
   */
  
  const deleteProduct = async (id) => {
    const newURL = `${URL}/api/products/${id}`;
  
    try {
        await fetch(newURL, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"delete": true})
        })
    } catch (error) {
        console.error(error);
    }
    listRefresh(); //function refresh list
  }
  
  /**
   * function active or deactive product
   */
  
  const activeDeactive = async (id, active) => {
    const newURL = `${URL}/api/products/${id}`;
  
    try {
        await fetch(newURL, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"active": !active})
        })
    } catch (error) {
        console.error(error);
    }
    listRefresh(); //function refresh list
  }

  const edit = () => {
    setEditPopUp(true);
    openClosePopUp(product);
  }

  /**
   * Return view buttons
   */
  return (
    <div className={AdminButtonsStyles.AdminButtons}>
        <button className={AdminButtonsStyles.view} onClick={ () => activeDeactive(id, active)}>
            <SvgView />
        </button>

        <button onClick={ () => edit()}>
            <SvgEdit />
        </button>

        <button className={AdminButtonsStyles.delete} onClick={ () => deleteProduct(id)}>
            <SvgTrash />
        </button>
    </div>
  )
}
