import React from 'react'
import Book from './Book.jsx'

export default class BookList extends React.Component {

  renderBooks() {
    return this.props.books.map((book, i) => {
      return <Book {...book} key={i} updateCart={this.props.updateCart}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <ul className="list-group">
          {this.renderBooks()}
        </ul>
      </div>
    )
  }
}

BookList.defaultProps = {
  books: []
}
