import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import BookList from './components/BookList.jsx'
import Cart from './components/Cart.jsx'

class App extends Component {

  state = { books: [] , cart:[], search:"", booksCopy:[], total:[0]}

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState ({books:json, booksCopy:json})
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({...this.state,[e.target.name]: e.target.value})
    // console.log("this.state:", this.state);
  }

  search = async (e) => {
    e.preventDefault()
    // console.log("hello", this.state.search)
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

  updateCart =(bookTitle)=>{
  let book = this.state.books.find(book=>book.title === bookTitle)
    this.setState({cart:[...this.state.cart,book], total:[...this.state.total,book.price]})
    // console.log(this.state.cart)
  }


  render() {
    return (
      <div class= "conatiner">

          <div className="App">
            <SearchBar
            search= {this.search}
            onChange = {this.onChange}
            />
            <br/>
            <BookList
            title="Books"
            books={this.state.books}
            updateCart={this.updateCart}/>
            <br/>
            <Cart
            cart={this.state.cart}
            total ={this.state.total}
            />
          </div>
      </div>
    )
  }
}

export default App
