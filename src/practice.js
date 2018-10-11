import React, {Component} from 'react'

const styles = {
  progress: {
    height: '30px'
  }
}

export default class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      showAnswer: false,
      width: '0%'
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
      currentIndex: currentIndex ? currentIndex - 1 : cards.length - 1,
      width: Math.floor((currentIndex - 1) / (cards.length) * 100) + '%'
    })
  }

  handleNext() {
    const {currentIndex} = this.state
    const { cards } = this.props
    this.setState({
      currentIndex: currentIndex < cards.length - 1 ? currentIndex + 1 : 0,
      width: Math.floor((currentIndex + 1) / (cards.length) * 100) + '%'
    })
  }

  render() {
    const { cards } = this.props
    const { currentIndex, showAnswer, width } = this.state
      return (
        <div>
        <h3 className="text-center mt-5">Practice Your Flashcards!</h3>
        <div className="d-flex justify-content-center">
          <div className="progress w-50 mt-5" style={styles.progress}>
            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width}} aria-valuemin="0" aria-valuemax="100">{width}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <i className="fas fa-chevron-left fa-3x mr-5 mt-4" onClick={this.handlePrev}></i>
            <div className="card w-50">
              <div className="card-body border">
                <h5 className="card-title">{cards[currentIndex].question}</h5>
                <i className={showAnswer === false ? "fas fa-chevron-circle-right" : "fas fa-chevron-circle-down"} onClick={this.toggleAnswer}> Show Answer</i>
                <p className="card-text" style={{visibility: showAnswer === false ? 'hidden' : ''}}>{cards[currentIndex].answer}</p>
              </div>
            </div>
          <i className="fas fa-chevron-right fa-3x ml-5 mt-4" onClick={this.handleNext}></i>
        </div>
        </div>
      )
  }
}
