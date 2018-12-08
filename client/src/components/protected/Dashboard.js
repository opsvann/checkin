import React, { Component } from 'react'
import EventoList from '../EventoList'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        Dashboard. Esta é uma página protegida. Você só pode ver esta página se estiver autenticada.
        <EventoList history={this.props.history} />
      </div>
    )
  }
}
