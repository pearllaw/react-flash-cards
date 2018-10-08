import React, {Component} from 'react'

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { cards } = this.props
    const { currentIndex } = this.state
      return (
        <div className="card-body text-center mt-5 mx-5 pt-5 border">
          <h5 className="card-title">{cards[currentIndex].question}</h5>
        </div>
      )
  }
}
