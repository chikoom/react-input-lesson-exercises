import React, { Component } from 'react'

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
    }
  }
  handleInput = e => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    this.setState({
      [fieldName]: fieldValue,
    })
  }
  alertMsg = () => {
    alert(`Hello ${this.state.name}! You're ${this.state.age}`)
  }

  render() {
    return (
      <div>
        <input
          id='name-input'
          name='name'
          value={this.state.name}
          onChange={this.handleInput}
        />
        <input
          id='age-input'
          name='age'
          value={this.state.age}
          onChange={this.handleInput}
        />
        <button onClick={this.alertMsg}>Go to Bar</button>
      </div>
    )
  }
}

export default Exercise1
