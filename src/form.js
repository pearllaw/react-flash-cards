import React, {Component} from 'react'

const styles = {
  form: {
    width: '25rem',
    marginTop: '10rem'
  }
}

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const input = new FormData(e.target)
    const flashcard = {
      question: input.get('question'),
      answer: input.get('answer'),
      cardId: this.props.cardId
    }
    this.props.addFlashcard(flashcard)
    e.target.reset()
  }

  render() {
    return (
      <form id="flashcardForm" onSubmit={this.handleSubmit} style={styles.form} className="border mx-auto p-5">
        <h3 className="text-center p-3">Create a Flash Card</h3>
        <div className="form-group">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" className="form-control" name="question" required/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAnswer">Answer</label>
          <input type="text" className="form-control" name="answer" required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}
