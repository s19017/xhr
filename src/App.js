import React from 'react'

const Greeting = props => <li>{props.type}</li>

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
  }

  render () {
    const greetings = this.state.data.map((v, i) => (
      <Greeting type={v} key={i} />
    ))

    return <ul>{greetings}</ul>
  }

  componentDidMount () {
    fetch('./messages.json')
      .then(res => res.json())
      .then(json => json.messages)
      .then(json => this.setState({ data: json }))
  }
}

export default App
