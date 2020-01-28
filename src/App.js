import React from 'react'

class MultiForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'クジラ',
      age: 22,
      hobby: '読書'
    }
    this.doSubmit = this.doSubmit.bind(this)
    this.doChange = this.doChange.bind(this)
  }

  doChange (e) {
    const userValue = e.target.value
    const key = e.target.name
    this.setState({ [key]: userValue })
  }

  doSubmit (e) {
    e.preventDefault()
    const j = JSON.stringify(this.state)
    window.alert(j)
  }

  render () {
    return (
      <form action='' onSubmit={this.doSubmit}>
        <div>
          <label>
            名前: <br />
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.doChange}
            />
          </label>
        </div>
        <div>
          <label>
            年齢: <br />
            <input
              name='age'
              type='number'
              value={this.state.age}
              onChange={this.doChange}
            />
          </label>
        </div>
        <div>
          <label>
            趣味: <br />
            <input
              name='hobby'
              type='text'
              value={this.state.hobby}
              onChange={this.doChange}
            />
          </label>
        </div>
        <input type='submit' value='送信' />
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return (
      <div>
        <MultiForm />
      </div>
    )
  }
}

export default 
