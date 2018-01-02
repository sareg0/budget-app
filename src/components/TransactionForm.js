import React from 'react'
import { Redirect } from 'react-router-dom'

export default class TransactionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const parsedTransaction = this.prepareTransaction()
    this.props.onSubmit(parsedTransaction)

    this.setState({ isSubmitted: true })

  }

  handleInputChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  prepareTransaction () {
    let amount = this.state.amount

    if (this.props.isNegative) {
      amount = amount * -1
    }

    return { amount, description: this.state.description }
  }

  render () {
    if (this.state.isSubmitted) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>
          Enter Transaction
        </h2>
        <input
          required
          placeholder="amount"
          type="number"
          name="amount"
          value={this.state.amount}
          onChange={this.handleInputChange} />
        <input
          required
          placeholder="description"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}