'use strict'
import React, {Component, Fragment} from 'react'
import Form from './form'
import Home from './homepage'
import Navigation from './navbar';

export default class Flashcard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.addFlashcard = this.addFlashcard.bind(this)
  }

  addFlashcard(newCard) {
    const { cards } = this.state
    const flashcard = Object.assign({}, newCard)
    const flashcards = [...cards, flashcard]
    this.setState({cards: flashcards})
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Home />
      </Fragment>
    )
  }
}
