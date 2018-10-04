import React, {Component} from 'react'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'cards'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({activeLink: e.target.id})
  }

  render() {
    const { activeLink } = this.state
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a className={activeLink === 'cards' ? "nav-item nav-link active" : "nav-item nav-link"}
            id="cards" href="#cards" onClick={this.handleClick}>Cards</a>
          <a className={activeLink === 'new' ? "nav-item nav-link active" : "nav-item nav-link"}
            id="new" href="#new" onClick={this.handleClick}>New</a>
        </div>
      </div>
    </nav>
    )
  }
}
