import { useState } from "react";

export default function NameInput(props) {
  const [nameInputted, setNameInputted] = useState(false);

  return (
    <div>
      <h1>Name</h1>
      {nameInputted ? (
        <h1>{props.charName}</h1>
      ) : (
        <div>
          <input
            type="text"
            id="charName"
            value={props.charName}
            onChange={props.handleChange}
            placeholder="enter character name"
          />
        </div>
      )}
      <button type="submit" onClick={() => setNameInputted(!nameInputted)}>
        {nameInputted ? "edit" : "done"}
      </button>
    </div>
  );
}
