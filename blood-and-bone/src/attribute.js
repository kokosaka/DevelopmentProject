export default function Attribute(props) {
  return (
    <div>
      {props.att}
      <div>
        <input type="number" className={props.className} id={props.att} value={props.value} onChange={props.handleChange} />
      </div>
    </div>
  );
}