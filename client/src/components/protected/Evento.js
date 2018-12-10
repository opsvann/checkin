import React, { Component } from 'react'
import Participantes from './Participantes'
import {grupos} from '../../constant/grupos'
import {reactLocalStorage} from 'reactjs-localstorage';

export default class Evento extends Component {

  emptyItem = {
    nome: '',
    descricao: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      evento: this.emptyItem,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removerEvento = this.removerEvento.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.id !== "new") {
      fetch(`http://localhost:8080/evento/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState({evento: data}));
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let evento = {...this.state.evento};
    evento[name] = value;
    this.setState({evento});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/evento', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.evento)
    }).then(() => {
        this.props.history.push('/dashboard')
      })
  }

  removerEvento = () => {
    fetch(`http://localhost:8080/evento/${this.state.evento.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.props.history.push('/dashboard')
    })
  }

  render () {
    const user = reactLocalStorage.getObject("user");
    const admin = user.grupo === grupos.ADMIN ? true : false;
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Evento </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              readOnly={!admin}
              className="form-control"
              placeholder="Nome"
              name="nome"
              value={this.state.evento.nome}
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input
              readOnly={!admin}
              className="form-control"
              placeholder="Descrição"
              name="descricao"
              value={this.state.evento.descricao}
              onChange={this.handleChange} />
          </div>
          {this.state.evento.perfis && <Participantes perfis={this.state.evento.perfis} />}
          {admin &&
            <button type="submit" className="btn btn-primary" style={{marginRight: 5}}>Salvar</button>}
          {admin && this.props.match.params.id !== "new" &&
            <button type="button" className="btn btn-primary" onClick={this.removerEvento}>Remover</button>}
        </form>
      </div>
    )
  }
}
