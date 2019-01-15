import React from 'react'
import Book from './Book.jsx'

export default class BookList extends React.Component {

  renderBooks() {
    return this.props.books.map((book, i) => {
      return <Book {...book} key={i}/>
    })
  }

  render() {
    return (
      <div className = "conatiner-fluid">
        <div className="row">
            <div className="col-8">
              <div className="book-list">
                  <ul className="list-group">
                    {this.renderBooks()}
                  </ul>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

BookList.defaultProps = {
  books: []
}
