import React from 'react'
import Home from './homepage'

const styles= {
  card: {
    width: '18rem'
  }
}

function Card(props) {
  return (
    <div className="row justify-content-start">
      <div className="col-sm-3 m-2">
        <div className="card" style={styles.card}>
          <div className="card-body">
            <p className="card-text">{props.question}</p>
            <p className="card-text">{props.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Deck(props) {
  const cards = props.cards
  if (cards.length > 0) {
    return (
      <div className="container m-1">
        {
          cards.map((card, key) =>
          <Card key={key} question={card.question} answer={card.answer} />
        )}
      </div>
    )
  }
  else {
    return (
    <Home/>
  )}
}
