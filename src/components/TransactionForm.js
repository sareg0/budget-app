import React from 'react'

export default class TransactionForm extends React.Component {
  constructor (props) {
    super(props)
    this.defaultState = {
      amount: '',
      description: ''
    }

    this.state = this.defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const parsedTransaction = this.prepareTransaction()
    this.props.onSubmit(parsedTransaction)

    this.setState(this.defaultState)
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