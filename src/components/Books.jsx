import React from 'react'

export default class Card extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        {this.props.title}
      </li>
    )
  }

}
