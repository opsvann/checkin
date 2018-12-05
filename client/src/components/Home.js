import React, { Component } from 'react'
import EventoList from './EventoList'

export default class Home extends Component {
  render () {
    return (
      <div>
        Home. Página não protegida. Qualquer um pode ver esta página.
        <h1> Eventos </h1>
        <EventoList />
      </div>
    )
  }
}
