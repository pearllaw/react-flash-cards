'use strict'
import React, {Component, Fragment} from 'react'
import Form from './form'
import Home from './homepage'
import Navigation from './navbar'
import Deck from './deck'
import hash from './hash'

export default class Flashcard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      view: hash.parse(location.hash)
    }
    this.addFlashcard = this.addFlashcard.bind(this)
  }

  addFlashcard(newCard) {
    const { cards } = this.state
    const flashcard = Object.assign({}, newCard)
    const flashcards = [...cards, flashcard]
    this.setState({cards: flashcards})
  }

  renderView() {
    const { path } = this.state.view
    const { cards } = this.state
    switch (path) {
      case 'new':
        if (cards.length === 0) {
          return <Form addFlashcard={this.addFlashcard}/>
        }
        else {
          return <Deck cards={cards}/>
        }
      case 'cards':
        if (cards.length === 0) {
          return <Home/>
        }
        else {
          return <Form addFlashcard={this.addFlashcard}/>
        }
    }
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.setState({ view: hash.parse(location.hash) })
    }
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
