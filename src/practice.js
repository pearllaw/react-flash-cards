import React, {Component} from 'react'

const styles={
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  rightArrow: {
    position: 'absolute',
    top: '50px',
    left: '10px'
  },
  leftArrow: {
    position: 'absolute',
  }
}

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      showAnswer: false
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  toggleAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer})
  }

  handlePrev() {
    const { currentIndex } = this.state
    const { cards } = this.props
    this.setState({
      currentIndex: currentIndex ? currentIndex - 1 : cards.length - 1
    })
  }

  handleNext() {
    const {currentIndex} = this.state
    const { cards } = this.props
    this.setState({
      currentIndex: currentIndex < cards.length - 1 ? currentIndex + 1 : 0
    })
  }

  render() {
    const { cards } = this.props
    const { currentIndex, showAnswer } = this.state
      return (
        <div className="d-flex justify-content-center mt-5">
          <span><i className="fas fa-chevron-left fa-3x mr-5 mt-4" onClick={this.handlePrev}></i></span>
            <div className="card w-50">
              <div className="card-body border">
                <h5 className="card-title">{cards[currentIndex].question}</h5>
                <i className={showAnswer === false ? "fas fa-chevron-circle-right" : "fas fa-chevron-circle-down"} onClick={this.toggleAnswer}> Show Answer</i>
                <p className="card-text" style={{visibility: showAnswer === false ? 'hidden' : ''}}>{cards[currentIndex].answer}</p>
              </div>
            </div>
          <span><i className="fas fa-chevron-right fa-3x ml-5 mt-4" onClick={this.handleNext}></i></span>
        </div>
      )
  }
}
