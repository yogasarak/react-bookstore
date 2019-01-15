import React from 'react'

export default class SearchBar extends React.Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
        <h1 className = "text-info">Books</h1>
        <form onSubmit= {(e)=>this.props.search(e)} className="form-inline">
          <input name="search" onChange= {(e)=>
            this.props.onChange(e)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      </div>
    )
  }
}
