import './App.css';
import React from 'react';

import BaseAttributes from './components/base-att'
import CombatAttributes from './components/combat-att';
import Skills from './components/skills';
import NameInput from './components/name-input';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: '',
      dama: 0,
      baseAtt: {
        strength: 0,
        dexterity: 0,
        mind: 0,
        presence: 0,
      },
      combAtt: {
        vitality: 0,
        evasion: 0,
        armor: 0,
        alacrity: 0,
        tenacity: 0,
        power: 0,
      },
      skills: {
        fighting: 0,
        thievery: 0,
        stealth: 0,
        archery: 0,
        learned: 0,
        survival: 0,
        perception: 0,
        apothecary: 0,
        intimidation: 0,
        performance: 0,
        manipulation: 0,
        insight: 0,
        power: 0,
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleCombAtt() {
    var vita = 3+parseFloat(this.state.baseAtt.strength)-parseFloat(this.state.dama)
    var evas = 10+parseFloat(this.state.baseAtt.dexterity)
    // var arm = evas
    var alac = parseFloat(this.state.baseAtt.dexterity)+parseFloat(this.state.baseAtt.mind)
    var tena = this.state.baseAtt.presence === 0 ? 0 : 1+parseFloat(this.state.baseAtt.presence)
    var pow = 0

    var ca = {
      vitality: vita,
      evasion: evas,
      armor: evas,
      alacrity: alac,
      tenacity: tena,
      power: pow,
    }
    this.setState({
      combAtt: ca,
    })
  }

  handleDamage(e) {
    var ca = this.state.combAtt;
    ca.vitality -= 1;
    this.setState({
      combAtt: ca,
      dama: this.state.dama+1,
    })
  }
  handleTenacity(e) {
    var ca = this.state.combAtt;
    ca.tenacity = e.target.value;
    this.setState({
      combAtt: ca,
    })
  }

  //skills can only go as high as the lowest associated base attribute
  skillRank(e) {
    var s = this.state.skills;
    var ba = this.state.baseAtt;
    var skill = e.target.id;
    if((skill === "fighting" && (ba.strength > s.fighting && ba.dexterity > s.fighting)) ||
    (skill === "power" && (ba.presence > s.power && ba.mind > s.power)) ||
    (skill === "thievery" && ba.dexterity > s.thievery) ||
    (skill === "stealth" && ba.dexterity > s.stealth) ||
    (skill === "archery" && ba.dexterity > s.archery) ||
    (skill === "learned" && ba.mind > s.learned) ||
    (skill === "survival" && ba.mind > s.survival) ||
    (skill === "perception" && ba.mind > s.perception) ||
    (skill === "apothecary" && ba.mind > s.apothecary) ||
    (skill === "intimidation" && ba.presence > s.intimidation) ||
    (skill === "performance" && ba.presence > s.performance) ||
    (skill === "manipulation" && ba.presence > s.manipulation)||
    (skill === "insight" && ba.presence > s.insight)) {
      s.[skill] += 1;
    }

    this.setState({
      skills: s,
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
    } else if (e.target.className === "skills") {
      this.skillRank(e);
    } else if (e.target.id === "dama") {
      this.handleDamage(e);
    } else if (e.target.id === "tenacity") {
      this.handleTenacity(e);
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
          <NameInput nameInputted={this.state.nameInputted} charName={this.state.charName} handleChange={this.handleChange}/>
          <BaseAttributes baseAtt={this.state.baseAtt} handleChange={this.handleChange}/>
          <CombatAttributes combAtt={this.state.combAtt} handleChange={this.handleChange}/>
          <div>
            <h1>Damage</h1>
            <h2>{this.state.dama}</h2>
            <button id="dama" min="0" onClick={this.handleChange}>take damage</button>
          </div>
          <Skills skills={this.state.skills} handleChange={this.handleChange} />

          <a
            type="button"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(this.state)
            )}`}
            download={`${this.state.charName}.json`}
            >
          {`Export Character`}
          </a>
        </header>
      </div>
    );
  }
};
