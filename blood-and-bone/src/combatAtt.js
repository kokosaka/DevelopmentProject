import DependantAttribute from "./dep-attribute";

export default function CombatAttributes(props) {
  return (
    <div>
      <h1>Combat Attributes</h1>
      <div>
        {Object.entries(props.combAtt).map(([att, value]) => {
            return <DependantAttribute className="combAtt" att={att} value={value} handleChange={props.handleChange}/>
          })
        }
      </div>
    </div>
  );
}