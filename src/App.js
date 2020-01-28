import React from 'react'

class ColorBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      colors: ['red', 'blue', 'green', 'yellow', 'black']
    }
  }

  render () {
    const colors = this.state.colors
    const index = this.state.index
    const cur = index >= 0 ? colors[index] : ''
    const items = colors.map(c => {
      let bs = '1px solid white'
      if (c === cur) {
        bs = '1px solid black'
      }
      const cstyle = {
        color: c,
        border: bs
      }
      const clickHandler = e => {
        const c = e.target.style.color
        const i = this.state.colors.indexOf(c)
        this.setState((index: i))
        if (this.props.onColorChange) {
          this.props.onColorChange({ color: c })
        }
      }
      return (
        <span onClick={clickHandler} style={cstyle}>
          ■
        </span>
      )
    })
    return <div>{items}</div>
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
        <ColorBox />
      </div>
    )
  }
}

export default App
