import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventos: [],
    };
    this.navigateToEvento = this.navigateToEvento.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:8080/eventos`)
      .then(response => response.json())
      .then(data => this.setState({eventos: data}));
  }

  navigateToEvento = (evento) => {
    this.props.history.push(`/evento/${evento.id}`)
  }

  render () {
    return (
      <div>
        Home. Página não protegida. Qualquer um pode ver esta página.
        <h1> Eventos </h1>
        <ul className="list-group">
          {this.state.eventos.length === 0 ? <h3> Não há eventos. </h3> : null}
          {this.state.eventos.map((evento, i) => {
            return (
              <li key={i} className="list-group-item" onClick={() => this.navigateToEvento(evento)}>
                <span className="badge">{evento.perfis.length}</span>
                {evento.nome}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
