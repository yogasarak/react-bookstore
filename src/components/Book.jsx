import React from 'react';

export default class Book extends React.Component {
//
//   onClick = (e) => {
//   e.preventDefault()
//   this.props.updateCart({this.props.id})
// }

  render() {
    return (
      <div>
          <li className="list-group-item">
            {this.props.title}
          </li>
          <button type="button" className="btn btn-info ml-5" onClick={this.onClick}>add to cart</button>
          {}
      </div>
    )
  }
}
