import clientsButtonsStyles from '../styles/ClientsButtons.module.css'
import SvgAdd from './svg/SvgAdd'
import SvgLess from './svg/SvgLess'

export default function ClientsButtons () {
  return (
    <div className={clientsButtonsStyles.ClientsButtons}>
        <button className={clientsButtonsStyles.less}>
            <SvgLess />
        </button>

        <input type="number" name="" placeholder='0' />

        <button>
            <SvgAdd />
        </button>
    </div>
  )
}
