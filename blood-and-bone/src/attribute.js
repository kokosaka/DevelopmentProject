export default function Attribute(props) {
  return (
    <div>
      {props.att} <input type="number" className={props.className} id={props.att} value={props.value} onChange={props.handleChange}></input>
    </div>
  );
}