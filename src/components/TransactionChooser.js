import React from 'react'
import TransactionForm from './TransactionForm'

export default class TransactionChooser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (transaction) {
    let amount = transaction.amount
    if (this.state.form === 'negative') {
      amount = amount * -1
    }
    this.props.onSubmit({ amount, description: transaction.description })
    this.setState({ form: null })
  }

  render () {
    if (this.state.form) {
      return (
        <div>
          <TransactionForm
            onSubmit={ this.handleSubmit } />
          <button onClick={ () => this.setState({ form: null })}>
            cancel
          </button>
        </div>
      )
    }

    return (
      <div>
        <button onClick={ () => this.setState({ form: 'positive' }) }>
          &#43;
        </button>
        <button onClick={ () => this.setState({ form: 'negative' }) }>
          &#8722;
        </button>
      </div>
    )
  }
}