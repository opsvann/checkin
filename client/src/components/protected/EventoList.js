import React, { Component } from 'react'
import {grupos} from '../../constant/grupos'
import {reactLocalStorage} from 'reactjs-localstorage';

export default class EventoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventos: [],
    };
    this.navigateToEvento = this.navigateToEvento.bind(this);
    this.navigateToNewEvento = this.navigateToNewEvento.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:8080/eventos`)
      .then(response => response.json())
      .then(data => this.setState({eventos: data}));
  }

  navigateToEvento = (evento) => {
    const user = reactLocalStorage.getObject("user");
    if (user.grupo === grupos.ADMIN) {
      this.props.history.push(`/evento/${evento.id}`)
    } else {
      evento.perfis.push(user);
      this.checkIn(evento);
      this.setState({});
    }
  }

  navigateToNewEvento = () => {
    this.props.history.push(`/evento/new`)
  }

  checkIn = (evento) => {
    fetch('http://localhost:8080/evento', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(evento)
    })
    .then(response => response.json())
    .then((data) => {
      alert("Check-in realizado")
    })
  }

  render () {
    const user = reactLocalStorage.getObject("user");
    const admin = user.grupo === grupos.ADMIN ? true : false;
    return (
      <div>
        <h1> Eventos </h1>
        <ul className="list-group">
          {this.state.eventos.length === 0 ? <h3> Não há eventos. </h3> : null}
          {this.state.eventos.length !== 0 && (admin ?
            <h3> Clique para editar o evento </h3> :
            <h3> Clique para fazer check-in no evento </h3>)}
          {this.state.eventos.map((evento, i) => {
            return (
              <div key={i} className="list-group" onClick={() => this.navigateToEvento(evento)}>
                <a className="list-group-item active">
                  <h4 className="list-group-item-heading">{evento.nome}</h4>
                  <p className="list-group-item-text">{evento.descricao}</p>
                  {evento.perfis.map((perfil, i) => {
                    return user.uid === perfil.uid &&
                    <p key={i} className="list-group-item-text" style={{color: 'grey'}}>
                      Check-in realizado neste evento
                    </p>
                  })}
                </a>
              </div>
            )
          })}
        </ul>
        {admin && <button className="btn btn-primary" onClick={this.navigateToNewEvento}>Criar evento</button>}
      </div>
    )
  }
}
