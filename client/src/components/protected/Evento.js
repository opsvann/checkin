import React, { Component } from 'react'

export default class Evento extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
  }

  removerEvento = () => {
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Evento </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" placeholder="Nome" ref={(nome) => this.nome = nome} />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input className="form-control" placeholder="Descrição" ref={(descricao) => this.descricao = descricao} />
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button type="submit" className="btn btn-primary">Editar</button>
          <button type="button" className="btn btn-primary" onClick={this.removerEvento}>Remover</button>
        </form>
      </div>
    )
  }
}
