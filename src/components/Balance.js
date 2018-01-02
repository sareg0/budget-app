import React from 'react'

export default class Balance extends React.Component {
  render () {
    return (
      <div>
        <h2>Balance</h2>
        {this.props.value}
      </div>
    )
  }
}