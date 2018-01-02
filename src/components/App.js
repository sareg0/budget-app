import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Balance from './Balance'
import TransactionForm from './TransactionForm'
import TransactionTable from './TransactionTable'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/transactions">Transactions</Link>
      </li>
    </ul>
  </div>
)

export default class App extends React.Component {
  constructor (props) {
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
    this.renderHomePage = this.renderHomePage.bind(this)
    this.renderTransactionsPage = this.renderTransactionsPage.bind(this)
    this.renderTransactionForm = this.renderTransactionForm.bind(this)
  }

  addTransaction (transaction) {
    const transactions = [...this.state.transactions, transaction]
    this.setState({ transactions })
  }

  deleteTransaction (transactionIndex) {
    const transactions = this.state.transactions
    transactions.splice(transactionIndex, 1)
    this.setState({ transactions })
  }

  calculateBalance () {
    const { transactions } = this.state
    const total = transactions.reduce((total, { amount }) => {
      return total + parseFloat(amount)
    }, 0)
    return total.toFixed(2)
  }

  renderHomePage () {
    return (
      <div>
        <ul>
          <li>
            <Link to="/transactions/new/positive">&#43;</Link>
          </li>
          <li>
            <Link to="/transactions/new/negative">&#8722;</Link>
          </li>
        </ul>
        <Balance value={ this.calculateBalance() } />
      </div>
    )
  }

  renderTransactionsPage () {
    return(
      <TransactionTable
        transactions={ this.state.transactions }
        onDelete={ this.deleteTransaction } />
    )
  }

  renderTransactionForm (routeProps) {
    //https://reacttraining.com/react-router/web/api/Route/Route-props
    const type = routeProps.match.params.type
    const isNegative = type === 'negative'
    return (
      <TransactionForm
        onSubmit={ this.addTransaction }
        isNegative={ isNegative } />
    )
  }

  render () {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" render={ this.renderHomePage } />
          <Route exact path="/transactions"
            render={ this.renderTransactionsPage } />
          <Route exact path="/transactions/new/:type"
            render={ this.renderTransactionForm } />
        </div>
      </Router>
    )
  }
}