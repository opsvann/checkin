import React, { Component } from 'react'

export default class Perfil extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  removerPerfil = () => {
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Perfil </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" placeholder="Nome" ref={(nome) => this.nome = nome} />
          </div>
          <div className="form-group">
            <label>Grupo</label>
            <input className="form-control" placeholder="Grupo" ref={(grupo) => this.grupo = grupo} />
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button type="submit" className="btn btn-primary">Editar</button>
          <button type="button" className="btn btn-primary" onClick={this.removerPerfil}>Remover</button>
        </form>
      </div>
    )
  }
}
