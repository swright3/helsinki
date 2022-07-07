import { useState } from 'react'

const Button = ({text,onClick}) => <button onClick={onClick}>{text}</button>

const Stat = ({text,value}) => <div>{text} {value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)

  const handleNeutralClick = () => setNeutral(neutral+1)

  const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <h1>Statistics</h1>
      <Stat text="good" value={good} />
      <Stat text="neutral" value={neutral} />
      <Stat text="bad" value={bad} />
      <Stat text="all" value={good+neutral+bad} />
      <Stat text="average" value={(good-bad)/(good+neutral+bad)} />
      <Stat text="positive" value={(good*100)/(good+neutral+bad)} />
    </div>
  )
}

export default App