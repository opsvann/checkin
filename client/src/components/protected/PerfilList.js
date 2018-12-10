import React, { Component } from 'react'

export default class PerfilList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      perfis: [],
    };
    this.navigateToPerfil = this.navigateToPerfil.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:8080/perfis`)
      .then(response => response.json())
      .then(data => this.setState({perfis: data}));
  }

  navigateToPerfil = (perfil) => {
    this.props.history.push(`/perfil/${perfil.id}`)
  }

  render () {
    return (
      <div>
        <h1> Perfis </h1>
        {this.state.perfis.length === 0 ? <h3> Não há nenhum perfil cadastrado. </h3> : null}
        {this.state.perfis.map((perfil, i) => {
          return (
            <ul key={i} className="list-group">
              <li className="list-group-item" onClick={() => this.navigateToPerfil(perfil)}>
                <h4 className="list-group-item-heading">{perfil.nome}</h4>
                {perfil.email}
              </li>
            </ul>
          )
        })}
      </div>
    )
  }
}
