import React from 'react';

export default class Cart extends React.Component {

  render() {
    return (
      <div>
          <ul className="list-group">
            <li className="list-group-item bg-info text-white">Cart</li>
            {this.props.cart.map((book,i)=>
              <li className="list-group-item mt-5"  key={i}>{book.title}</li>)
            }
            <br/>
        <li className="list-group item">Total: ${this.props.total.reduce((result,cv)=>result + cv)}</li>
          </ul>
      </div>
    )
  }
}
