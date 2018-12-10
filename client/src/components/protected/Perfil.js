import React, { Component } from 'react'
import {grupos} from '../../constant/grupos'
import {reactLocalStorage} from 'reactjs-localstorage';

export default class Perfil extends Component {

  emptyItem = {
    nome: '',
    email: '',
    grupo: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      perfil: this.emptyItem,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removerPerfil = this.removerPerfil.bind(this);
  }

  componentWillMount() {
    const user = reactLocalStorage.getObject("user");
    const perfilId = this.props.match.params.id;
    fetch(`http://localhost:8080/perfil/${perfilId || user.id}`)
      .then(response => response.json())
      .then(data => this.setState({perfil: data}));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let perfil = {...this.state.perfil};
    perfil[name] = value;
    this.setState({perfil});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/perfil', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.perfil)
    }).then(() => {
      const user = reactLocalStorage.getObject("user");
      if (user.uid === this.state.perfil.uid) {
        reactLocalStorage.setObject("user", this.state.perfil)
      }
      this.props.history.push('/dashboard')
    })
  }

  removerPerfil = () => {
    fetch(`http://localhost:8080/perfil/${this.state.perfil.id}`, {
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
        <h1> Perfil </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              className="form-control"
              placeholder="Nome"
              name="nome"
              value={this.state.perfil.nome}
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              readOnly
              className="form-control"
              placeholder="Email"
              name="email"
              value={this.state.perfil.email}
              onChange={this.handleChange} />
          </div>
          {admin &&
            <div className="form-group">
              <label>Grupo</label>
              <input
                className="form-control"
                placeholder="Nome do grupo"
                name="grupo"
                value={this.state.perfil.grupo}
                onChange={this.handleChange} />
            </div>
          }
          <button type="submit" className="btn btn-primary" style={{marginRight: 5}}>Salvar</button>
          <button type="button" className="btn btn-primary" onClick={this.removerPerfil}>Remover</button>
        </form>
      </div>
    )
  }
}
