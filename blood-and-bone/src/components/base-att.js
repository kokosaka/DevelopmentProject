import Attribute from "./attribute";

export default function BaseAttributes(props) {
  return (
    <div>
      <h1>Base Attributes</h1>
      <div>
        {Object.entries(props.baseAtt).map(([att, value], id) => {
          return (
            <Attribute
              key={id}
              className="baseAtt"
              att={att}
              value={value}
              handleChange={props.handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
