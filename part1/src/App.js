const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <p>Greetings</p>
      <Hello name="Theo"/>
      <Hello name="Sam"/>
    </div>
  );
}

export default App;
