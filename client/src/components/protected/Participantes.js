import React, { Component } from 'react'

export default class Participantes extends Component {

  render () {
    const { perfis } = this.props;
    return (
      <div>
        <h3> Realizaram check-in </h3>
        <ul className="list-group">
          {perfis.length === 0 ? <h3> Ninguém realizou check-in até o momento. </h3> : null}
          {perfis.map((perfil, i) => {
            return (
              <li key={i} className="list-group-item list-group-item-success">
                <h4 className="list-group-item-heading">{perfil.nome}</h4>
                {perfil.email}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
