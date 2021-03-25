import './App.css';
import React from 'react';

import BaseAttributes from './baseAtt';
import CombatAttributes from './combatAtt';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: '',
      dama: 0,
      baseAtt: {
        stre: 0,
        dext: 0,
        mind: 0,
        pres: 0,
      },
      combAtt: {
        vita: 0,
        evas: 0,
        arm: 0,
        alac: 0,
        tena: 0,
        pow: 0,
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleCombAtt() {
    var vita = 3+parseFloat(this.state.baseAtt.stre)-parseFloat(this.state.dama)
    var evas = 10+parseFloat(this.state.baseAtt.dext)
    // var arm = evas
    var alac = parseFloat(this.state.baseAtt.dext+this.state.baseAtt.mind)
    var tena = parseFloat(1+this.state.baseAtt.pres)
    var pow = 0

    var ca = {
      vita: vita,
      evas: evas,
      arm: evas,
      alac: alac,
      tena: tena,
      pow: pow,
    }
    this.setState({
      combAtt: ca,
    })
  }

  handleDamage() {
    var ca = this.state.combAtt;
    ca.vita -= 1;
    var dama = this.state.dama + 1;
    this.setState({
      combAtt: ca,
      dama: dama,
    })
  }

  handleChange(e) {
    if(e.target.className === "baseAtt") {
      var ba = this.state.baseAtt;
      ba.[e.target.id] = e.target.value;

      this.setState({
        baseAtt: ba,
      })

      this.handleCombAtt();
    } else if (e.target.id === "dama") {
      this.handleDamage();
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" id="charName" value={this.state.charName} onChange={this.handleChange}></input>
          <BaseAttributes baseAtt={this.state.baseAtt} handleChange={this.handleChange}/>
          <CombatAttributes combAtt={this.state.combAtt} baseAtt={this.state.baseAtt} handleChange={this.handleChange}/>
          <div>Damage <input type="number" id="dama" value={this.dama} onChange={this.handleChange}></input></div>
        </header>
      </div>
    );
  }
};
