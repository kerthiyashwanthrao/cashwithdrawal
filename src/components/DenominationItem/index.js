// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onchange} = props
  const {id, value} = item

  const withdraw = () => {
    onchange(value)
  }

  return (
    <li key={id} className="denomination-item">
      <button className="denomination-button" onClick={withdraw} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
