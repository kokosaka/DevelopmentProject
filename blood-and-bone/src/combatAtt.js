import DependantAttribute from "./dep-attribute";

export default function CombatAttributes(props) {
  return (
    <div>
      Combat Attributes
      <div>
        {Object.entries(props.combAtt).map(([att, value]) => {
              return <DependantAttribute className="combAtt" att={att} value={value} handleChange={props.handleChange}/>
            })
          }
      </div>
    </div>
  );
}