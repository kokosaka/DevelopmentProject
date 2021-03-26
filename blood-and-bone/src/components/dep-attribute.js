export default function DependantAttribute(props) {
  return (
    <div>
      {props.att}
      {props.att === "tenacity" ? (
        <div>
          <input
            type="number"
            className={props.className}
            id={props.att}
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      ) : (
        <div>{props.value}</div>
      )}
    </div>
  );
}
