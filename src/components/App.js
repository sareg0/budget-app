import React from 'react'
import Balance from './Balance'
import TransactionForm from './TransactionForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: []
    }

    this.addTransaction = this.addTransaction.bind(this)
  }

  addTransaction(value) {
    const transactions = [...this.state.transactions, value]
    this.setState({ transactions })
  }

  calculateBalance() {
    const { transactions } = this.state
    const total = transactions.reduce((total, { amount }) => {
      return total + parseFloat(amount)
    }, 0)
    return total.toFixed(2)
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <TransactionForm onSubmit={ this.addTransaction } />
        <Balance value={ this.calculateBalance() } />
      </div>
    )
  }

}