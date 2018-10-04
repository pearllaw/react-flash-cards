import React from 'react'

export default function Home() {
  return (
  <div className="container mt-5">
    <div className="jumbotron mx-auto w-75 h-75">
      <div className="row text-center">
        <div className="col p-4">
          <h2 className="display-4">You have no flash cards</h2>
          <p className="lead">
            <a className="btn btn-primary btn-md mt-4" href="#new" role="button">Make One</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
