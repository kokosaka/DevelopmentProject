export default function CombatAttributes(props) {
  return (
    <div>
      Combat Attributes
      <div>
        <ul>
          <li>Vitality <input type="number" className="combAtt" id="vita" value={props.combAtt.vita} onChange={props.handleChange}></input></li>
          <li>Evasion <input type="number" className="combAtt" id="evas" value={props.combAtt.evas} onChange={props.handleChange}></input></li>
          <li>Armor <input type="number" className="combAtt" id="arm" value={props.combAtt.arm} onChange={props.handleChange}></input></li>
          <li>Alacrity <input type="number" className="combAtt" id="alac" value={props.combAtt.alac} onChange={props.handleChange}></input></li>
          <li>Tenacity <input type="number" className="combAtt" id="tena" value={props.combAtt.tena} onChange={props.handleChange}></input></li>
          <li>Power <input type="number" className="combAtt" id="pow" value={props.combAtt.pow} onChange={props.handleChange}></input></li>
        </ul>
      </div>
    </div>
  );
}