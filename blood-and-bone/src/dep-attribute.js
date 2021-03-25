export default function DependantAttribute(props) {
  return (
    <div>
      {props.att}
      {props.att === 'tenacity' ?
      <input type="number" className={props.className} id={props.att} value={props.value} onChange={props.handleChange}></input> :
      <div>{props.value}</div>}
    </div>
  );
}