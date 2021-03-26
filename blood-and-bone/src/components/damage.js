export default function Damage(props) {
  return (
    <div>
      <h1>Damage</h1>
      <h2>{props.dama}</h2>
      <button id="dama" min="0" onClick={props.handleChange}>
        take damage
      </button>
    </div>
  );
}
