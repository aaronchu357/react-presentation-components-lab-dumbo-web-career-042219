import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    switch(this.state.mood) {
      case 'happy':
        this.setState({mood: 'sad'})
        break
      case 'sad':
        this.setState({mood: 'happy'})
        break
      default:
        this.setState({mood: 'happy'})
    }
  }

  render() { return <div onClick={this.handleClick}>{this.state.mood}</div> }
}