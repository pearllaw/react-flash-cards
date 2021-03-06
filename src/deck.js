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
    <div className="col-md-3 m-3">
        <div className="card" style={styles.card}>
          <div className="card-body">
            <p className="card-text">{question}</p>
            <p className="card-text">{answer}</p>
            <div className="text-right">
              <a href={href}><i className="fas fa-pencil-alt fa-fw"></i></a>&nbsp;&nbsp;
              <a href="#cards" onClick={() => onClick(cardId)}><i className="far fa-trash-alt fa-fw"></i></a>
            </div>
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
        <div className="container m-1">
          <div className="row">
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
