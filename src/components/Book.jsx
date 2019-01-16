import React from 'react';

export default class Book extends React.Component {

  onClick = (book) => {
  this.props.updateCart(book)
  // console.log("hi");
  }

  render() {
    return (
      <div>
          <li className="list-group-item">
            {this.props.title}
          </li>
            <button type="button" className="btn btn-info ml-5" value={this.props.title} onClick={(e)=>this.onClick(e.target.value)}>Add To Cart</button>
      </div>
    )
  }
}
