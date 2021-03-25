import { useState } from 'react';

export default function NameInput(props) {
  const [nameInputted, setNameInputted] = useState(false);

  return (
    <div>
      {nameInputted ?
        <h1>{props.charName}</h1> :
        <input type="text" id="charName" value={props.charName} onChange={props.handleChange}/>
      }
      <button type="submit" onClick={() => setNameInputted(!nameInputted)}>{nameInputted ? "edit" : "done"}</button>
    </div>
  );
}