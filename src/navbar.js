import React from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#cards">Cards</a>
          <a className="nav-item nav-link" href="#new">New</a>
        </div>
      </div>
    </nav>
  )
}
