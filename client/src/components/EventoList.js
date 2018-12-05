import React, { Component } from 'react'

export default class EventoList extends Component {
  render () {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <span className="badge">14</span>
          Show na praça
        </li>
        <li className="list-group-item">
          <span className="badge">2</span>
          Exposição no shopping
        </li>
      </ul>
    )
  }
}
