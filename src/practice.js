import React, {Component} from 'react'

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      showAnswer: false
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  toggleAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer})
  }

  render() {
    const { cards } = this.props
    const { currentIndex, showAnswer } = this.state
      return (
        <div className="card w-75">
          <div className="card-body border">
            <h5 className="card-title">{cards[currentIndex].question}</h5>
            <i className={showAnswer === false ? "fas fa-chevron-circle-right" : "fas fa-chevron-circle-down"} onClick={this.toggleAnswer}> Show Answer</i>
            <p className="card-text" style={{visibility: showAnswer === false ? 'hidden' : ''}}>{cards[currentIndex].answer}</p>
          </div>
        </div>
      )
  }
}
