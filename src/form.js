import React, {Component} from 'react'

const styles = {
  form: {
    width: '25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black',
    padding: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '1rem'
  }
}

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
      <form id="flashcardForm" onSubmit={this.handleSubmit} style={styles.form}>
        <h3 style={styles.title}>Create a Flash Card</h3>
        <div className="form-group">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" className="form-control" id="question" required/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAnswer">Answer</label>
          <input type="text" className="form-control" id="answer" required/>
        </div>
        <div style={{textAlign: 'center'}}>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}
