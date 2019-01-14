import React, { Component } from 'react'
import './App.css'
import CardList from './components/Books.jsx'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Books</h1>
      <div className="container">
          <ul className="list-group">
            <li className="list-group-item disabled"></li>
            <li className="list-group-item">id</li>
            <li className="list-group-item">title</li>
            <li className="list-group-item">author</li>
            <li className="list-group-item">pages</li>
          </ul>
      </div>
      </div>
    )
  }
}

export default App
