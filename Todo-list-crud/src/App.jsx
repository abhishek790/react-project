import "./App.css";

function App() {
  return (
    <>
      <div className="border">
        <input type="text" className="input-field" />
        <button className="edit go">Edit</button>
        <button className="edit-list">Edit</button>
        <button className="Delete">Delete</button>

        <div className="list-items"></div>
      </div>
    </>
  );
}

export default App;
