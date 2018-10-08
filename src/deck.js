import React from 'react'
import Home from './homepage'

const styles= {
  card: {
    width: '18rem'
  }
}

function Card({question, answer, cardId}) {
  const href = `#edit?cardId=${cardId}`
  return (
    <div className="col-md-3 m-3">
        <div className="card" style={styles.card}>
          <div className="card-body">
            <p className="card-text">{question}</p>
            <p className="card-text">{answer}</p>
            <div className="text-right"><a href={href}><i className="fas fa-pencil-alt"></i></a></div>
          </div>
      </div>
    </div>
  )
}

export default function Deck({cards}) {
  if (cards.length > 0) {
    return (
      <div className="container m-1">
        <div className="row">
        {
          cards.map((card, index) =>
            <Card key={index} cardId={card.cardId} question={card.question} answer={card.answer} />
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
