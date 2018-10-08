import React, {Component, Fragment} from 'react'
import Navigation from './navbar'
import Deck from './deck'
import Form from './form'
import Edit from './edit-card'
import hash from './hash'

export default class Flashcard extends Component{
  constructor(props) {
    super(props)
    const appState = JSON.parse(localStorage.getItem('flashcards')) || {}
    const { path, params } = hash.parse(location.hash)
    this.state = {
      cards: appState.cards || [],
      cardId: appState.cardId || 0,
      view: { path, params }
    }
    this.addFlashcard = this.addFlashcard.bind(this)
    this.editFlashcard = this.editFlashcard.bind(this)
  }

  addFlashcard(newCard) {
    const { cards, cardId } = this.state
    const flashcard = Object.assign({}, newCard)
    const flashcards = [...cards, flashcard]
    this.setState({
      cards: flashcards,
      cardId: cardId + 1
    })
  }

  editFlashcard(selectedCard) {
    const { cards } = this.state
    const { params } = this.state.view
    const editedCard = cards.map(card => {
      card.cardId === parseInt(params.cardId, 10)
        ? selectedCard
        : card
    })
    this.setState({cards: editedCard})
  }

  renderView() {
    const { path, params } = this.state.view
    const { cards, cardId } = this.state
    switch (path) {
      case 'new':
        return <Form addFlashcard={this.addFlashcard} cardId={cardId}/>
      case 'edit':
        const editedCard = cards.find(card =>
          card.cardId === parseInt(params.cardId, 10)
        )
        return <Edit editedCard={editedCard} editFlashcard={this.editFlashcard}/>
      default:
        return <Deck cards={cards}/>
    }
  }

  componentDidMount() {
    window.onhashchange = () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
      })
    }

    window.addEventListener('beforeunload', () => {
      const { cards, cardId } = this.state
      localStorage.setItem('flashcards', JSON.stringify({cards, cardId}))
    })
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        {this.renderView()}
      </Fragment>
    )
  }
}
