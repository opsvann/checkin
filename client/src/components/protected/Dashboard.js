import React, { Component } from 'react'
import EventoList from './EventoList'
import PerfilList from './PerfilList'
import {grupos} from '../../constant/grupos'
import {reactLocalStorage} from 'reactjs-localstorage';

export default class Dashboard extends Component {

  componentWillMount() {
    setTimeout(() => {
      this.forceUpdate();
    }, 100);
  }

  render () {
    const user = reactLocalStorage.getObject("user");
    const admin = user.grupo === grupos.ADMIN ? true : false;
    return (
      <div>
        Dashboard. Esta é uma página protegida. Você só pode ver esta página se estiver autenticada.
        <div className="row">
          <div className={admin ? "col-md-6" : "col-md-12"}>
            <EventoList history={this.props.history} />
          </div>
          <div className="col-md-6">
            {admin && <PerfilList history={this.props.history} />}
          </div>
        </div>
      </div>
    )
  }
}
