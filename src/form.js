import React from 'react'

export default function Flashcard() {
  return (
    <form>
      <div className="form-group">
        <label for="inputQuestion">Question</label>
        <input type="text" className="form-control" id="inputQuestion"/>
      </div>
      <div className="form-group">
        <label for="inputAnswer">Answer</label>
        <input type="text" className="form-control" id="inputAnswer"/>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  )
}
