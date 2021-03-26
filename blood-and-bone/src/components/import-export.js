export default function ImportExport(props) {
  return (
    <div>
      <div>
        <input type="text" id="searchName" onChange={props.handleChange} />
        <button onClick={props.import}>import</button>
      </div>

      <a
        type="button"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(props.state)
        )}`}
        download={`${props.state.charName}.json`}
      >
        export
      </a>
    </div>
  );
}
