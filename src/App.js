import React from 'react'
import ValueInput from './ValueInput'

class InchToCm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inch: 0,
      cm: 0
    }
    this.inchChanged = this.inchChanged.bind(this)
    this.cmChanged = this.cmChanged.bind(this)
  }

  inchChanged (e) {
    const inchValue = e.value
    const cmValue = inchValue * 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  cmChanged (e) {
    const cmValue = e.value
    const inchValue = cmValue / 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  render () {
    return (
      <div>
        <ValueInput
          title='inch'
          onChange={e => this.inchChanged(e)}
          value={this.state.inch}
        />
        <ValueInput
          title='cm'
          onChange={e => this.cmChanged(e)}
          value={this.state.cm}
        />
      </div>
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
        <InchToCm />
      </div>
    )
  }
}

export default App
