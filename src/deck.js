import React, {Component} from 'react'
import Home from './homepage'

const styles= {
  card: {
    width: '18rem'
  }
}

function Card({question, answer, cardId, onClick}) {
  const href = `#edit?cardId=${cardId}`
  return (
    <div className="card-deck col-sm-3 mt-5">
        <div className="card border-primary mb-3" style={styles.card}>
        <h5 className="card-header">{question}</h5>
          <div className="card-body">
            <p className="card-text">{answer}</p>
          </div>
          <div className="card-footer bg-transparent text-right">
            <a href={href}><i className="fas fa-pencil-alt fa-fw"></i></a>&nbsp;&nbsp;
            <a href="#cards" onClick={() => onClick(cardId)}><i className="far fa-trash-alt fa-fw"></i></a>
          </div>
        </div>
    </div>
  )
}

export default class Deck extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(selectedCard) {
    this.props.removeFlashcard(selectedCard)
  }

  render() {
    const { cards } = this.props
    if (cards.length > 0) {
      return (
        <div className="container-fluid">
        <h2 className="text-center mt-5">Your Flashcards</h2>
          <div className="row d-flex justify-content-center">
          {
            cards.map(card =>
              <Card key={card.cardId} cardId={card.cardId} question={card.question} answer={card.answer}
                onClick={this.handleClick}/>
            )
          }
          </div>
        </div>
      )
    }
    else {
      return (
      <Home/>
    )}
  }
}
