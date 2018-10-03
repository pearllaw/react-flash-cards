'use strict'
import React, {Component} from 'react'
import Form from './form'

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
      <Form addFlashcard={this.addFlashcard}/>
    )
  }
}
