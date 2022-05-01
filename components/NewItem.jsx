import NewItemStyle from '../styles/NewItem.module.css'
import SvgAdd from './svg/SvgAdd'
export default function NewItem ({ openClosePopUp, setEditPopUp }) {
  const Item = () => {
    setEditPopUp(false)
    openClosePopUp()
  }
  return (
    <div className={NewItemStyle.NewItem} onClick={ () => Item()}>
        <SvgAdd />
    </div>
  )
}
