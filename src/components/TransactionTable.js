import React from 'react'

export default class TransactionTable extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          { this.props.transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{ transaction.amount }</td>
              <td>{ transaction.description }</td>
              <td>
                <button onClick={ () => this.props.onDelete(index) }>delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    )
  }
}