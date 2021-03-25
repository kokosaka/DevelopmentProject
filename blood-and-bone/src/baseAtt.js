export default function BaseAttributes(props) {
  return (
    <div>
      Base Attributes
      <div>
        <ul>
          <li>Strength <input type="number" className="baseAtt" id="stre" value={props.baseAtt.stre} onChange={props.handleChange}></input></li>
          <li>Dexterity <input type="number" className="baseAtt" id="dext" value={props.baseAtt.dext} onChange={props.handleChange}></input></li>
          <li>Mind <input type="number" className="baseAtt" id="mind" value={props.baseAtt.mind} onChange={props.handleChange}></input></li>
          <li>Presence <input type="number" className="baseAtt" id="pres" value={props.baseAtt.pres} onChange={props.handleChange}></input></li>
        </ul>
      </div>
    </div>
  );
}