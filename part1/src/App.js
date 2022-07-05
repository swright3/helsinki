const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, {props.age}</p>
    </div>
  )
}

function App() {
  const name = "Sam"
  const age = 23
  return (
    <div>
      <p>Greetings</p>
      <Hello name="Theo" age="21"/>
      <Hello name={name} age={age}/>
    </div>
  );
}

export default App;
