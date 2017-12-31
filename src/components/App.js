import React from 'react'
import Balance from './Balance'
import TransactionTable from './TransactionTable'
import TransactionChooser from './TransactionChooser'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [{
        amount: 66,
        description: 'bleep bloop'
      }, {
        amount: 88,
        description: 'rar rar'
      }]
    }

    this.addTransaction = this.addTransaction.bind(this)
    this.deleteTransaction = this.deleteTransaction.bind(this)
  }

  addTransaction(transaction) {
    const transactions = [...this.state.transactions, transaction]
    console.log("app transactions", transactions)
    this.setState({ transactions })
  }

  deleteTransaction(transactionIndex) {
    const transactions = this.state.transactions
    transactions.splice(transactionIndex, 1)
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
    return (
      <div>
        <TransactionChooser onSubmit={ this.addTransaction } />
        <Balance value={ this.calculateBalance() } />
        <TransactionTable
          transactions={ this.state.transactions }
          onDelete={ this.deleteTransaction } />
      </div>
    )
  }

}