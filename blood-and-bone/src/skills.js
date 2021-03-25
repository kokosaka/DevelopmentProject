export default function Skills(props) {
  return (
    <div>
      Skills
      <div>
        {Object.entries(props.skills).map(([att, value]) => {
            return (
              <div>{att} {value} {value === 0 ? "untrained" : value === 1 ? "novice" : value === 2 ? "apprentice" : value === 3 ? "adept" : value === 4 ? "expert" : "master"}
                {value < 5 && <button className="skills" id={att} onClick={props.handleChange} >rank up</button>}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}