import React, {Component} from 'react'

const styles = {
  form: {
    width: '25rem',
    marginTop: '10rem'
  }
}

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(e) {
    e.preventDefault()
    const edit = new FormData(e.target)
    const flashcard = {
      question: edit.get('question'),
      answer: edit.get('answer'),
      cardId: this.props.editedCard.cardId
    }
    this.props.editFlashcard(flashcard)
  }

  render() {
    const { editedCard } = this.props
    return (
      <form id="flashcardForm" onSubmit={this.handleSave} style={styles.form} className="border mx-auto p-5">
        <h3 className="text-center p-3">Edit Flash Card</h3>
        <div className="form-group">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" className="form-control" name="question" defaultValue={editedCard.question} required/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAnswer">Answer</label>
          <input type="text" className="form-control" name="answer" defaultValue={editedCard.answer} required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}
