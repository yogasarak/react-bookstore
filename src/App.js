import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import BookList from './components/BookList.jsx'

class App extends Component {

  state = { books: [] , cart:[], search:"", booksCopy:[]}

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState ({books:json, booksCopy:json})
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({...this.state,[e.target.name]: e.target.value})
    console.log("this.state:", this.state);
  }

  search = async (e) => {
    e.preventDefault()
    console.log("hello", this.state.search)

    let books = this.state.books.filter(book => {
    return book.title.includes(this.state.search) || book.author.includes(this.state.search)
  })
  console.log(books)
  if(this.state.search === ""){
    // const response = await fetch('http://localhost:8082/api/books')
    // const json = await response.json()
    this.setState ({...this.state,books:this.state.booksCopy})
  } else {
    this.setState({...this.state,books:books})
  }
}


  updateCart = async (id )=> {
  const response = await fetch('http://localhost:8082/api/books/cart/add/:id',
  {
    method: 'PATCH',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

const newCartItem = await response.json()

this.setState({books:[...this.state.cart, newCartItem]})
  }

  render() {
    return (
      <div className="App">
        <SearchBar
        search= {this.search}
        onChange = {this.onChange}
        />
        <BookList
        title="Books"
        books={this.state.books}
        updateCart={this.state.updateCart}/>
      </div>
    )
  }
}

export default App
