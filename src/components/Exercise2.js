import React, { Component } from 'react'

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      fruit: '',
    }
  }
  handleinput = e => {
    const inputVal = e.target.value
    const inputName = e.target.name
    this.setState(
      {
        [inputName]: inputVal,
      },
      () => {
        console.log(`${this.state.name} selected ${this.state.fruit}`)
      }
    )
  }
  render() {
    return (
      <div>
        <input
          name='name'
          id='name-input'
          value={this.state.name}
          onChange={this.handleinput}
        />
        <select
          onChange={this.handleinput}
          name='fruit'
          id='select-input'
          value={this.state.fruit}
        >
          <option value='Apple'>Apple</option>
          <option value='Banana'>Banana</option>
          <option value='Orange'>Orange</option>
        </select>
      </div>
    )
  }
}

export default Exercise2
