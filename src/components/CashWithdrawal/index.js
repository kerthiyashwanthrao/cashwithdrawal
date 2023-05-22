// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onchange = value => {
    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="header">
            <p className="profilepic">S</p>
            <p className="profilename">Sarah Williams</p>
          </div>
          <div className="balancecontainer">
            <p className="yourbalance">Your Balance</p>
            <div className="rupeescontainer">
              <p className="balance">{balance}</p>
              <p className="inrupees">In Rupees</p>
            </div>
          </div>
          <div className="withdrawcontainer">
            <p className="withdraw">Withdraw</p>
            <p className="choosesum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ulcontainer">
              {denominationsList.map(item => (
                <DenominationItem
                  item={item}
                  onchange={this.onchange}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
