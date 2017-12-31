import React from 'react'

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      amount: '',
      description: ''
    }

    this.state = this.defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)

    this.setState(this.defaultState)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
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