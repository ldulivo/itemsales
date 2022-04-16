import AdminButtonsStyles from '../styles/AdminButtons.module.css'

import SvgEdit from './svg/SvgEdit'
import SvgTrash from './svg/SvgTrash'
import SvgView from './svg/SvgView'

/**
 * function active or deactive product
 */

const activeDeactive = async (id, active, URL) => {
  const PostURL = `${URL}/api/products/${id}`;

  try {
      await fetch(PostURL, {
          method: 'PUT',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({"active": !active})
      })
  } catch (error) {
      console.error(error);
  }
}

export default function AdminButtons({id, active, URL}) {
  return (
    <div className={AdminButtonsStyles.AdminButtons}>
        <button className={AdminButtonsStyles.view} onClick={ () => activeDeactive(id, active, URL)}>
            <SvgView />
        </button>

        <button>
            <SvgEdit />
        </button>

        <button className={AdminButtonsStyles.delete}>
            <SvgTrash />
        </button>
    </div>
  )
}
