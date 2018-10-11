import React, {Component, Fragment} from 'react'
import Navigation from './navbar'
import Deck from './deck'
import Form from './form'
import Edit from './edit-card'
import Practice from './practice'
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
    this.removeFlashcard = this.removeFlashcard.bind(this)
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
      return card.cardId === parseInt(params.cardId, 10)
        ? selectedCard
        : card
    })
    this.setState({cards: editedCard})
    location.hash = 'cards'
  }

  removeFlashcard(cardId) {
    const { cards } = this.state
    const updatedCards = cards.filter(card =>
      card.cardId !== cardId)
    this.setState({cards: updatedCards})
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
      case 'practice':
        cards.length > 0 ? <Practice cards={cards}/> : <Deck cards={cards}/>
      default:
        return <Deck cards={cards} removeFlashcard={this.removeFlashcard}/>
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
