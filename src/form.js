import React, {Component} from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const flashcard = {
      question: document.querySelector('#question').value,
      answer: document.querySelector('#answer').value
    }
    this.props.addFlashcard(flashcard)
    e.target.reset()
  }
  render() {
    return (
      <form id="flashcardForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputQuestion">Question</label>
            <input type="text" className="form-control" id="question" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAnswer">Answer</label>
            <input type="text" className="form-control" id="answer" />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
  }
}
