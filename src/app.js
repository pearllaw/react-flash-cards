'use strict'
import React, {Component, Fragment} from 'react'
import Form from './form'
import Home from './homepage'
import Navigation from './navbar'
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
    switch (path) {
      case 'new':
        return <Form addFlashcard={this.addFlashcard}/>
      default:
        return <Home/>
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
