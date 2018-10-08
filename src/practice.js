import React, {Component} from 'react'

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      showAnswer: 'hidden'
    }
    this.showAnswer = this.showAnswer.bind(this)
  }

  showAnswer() {
    this.setState({ showAnswer: ''})
  }

  render() {
    const { cards } = this.props
    const { currentIndex } = this.state
      return (
        <div className="card w-75">
          <div className="card-body border">
            <h5 className="card-title">{cards[currentIndex].question}</h5>
            <i className="fas fa-chevron-circle-right" onClick={this.showAnswer}> Show Answer</i>
          </div>
        </div>
      )
  }
}
