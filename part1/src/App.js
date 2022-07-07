import { useState } from 'react'

const Button = ({text,onClick}) => <button onClick={onClick}>{text}</button>

const Stat = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good,bad,neutral}) => {
  if (good+bad+neutral === 0) {return <div>No feedback given</div>}
  return (
    <table><tbody>
      <Stat text="good" value={good} />
      <Stat text="neutral" value={neutral} />
      <Stat text="bad" value={bad} />
      <Stat text="all" value={good+neutral+bad} />
      <Stat text="average" value={(good-bad)/(good+neutral+bad)} />
      <Stat text="positive" value={`${(good*100)/(good+neutral+bad)}%`} />
      </tbody></table>
  )
}

const Votes = ({votes, selected, handleVote}) => {
  if (selected === null) {return <div></div>}
  return (
    <>
      <div>Has {votes[selected]} votes</div>
      <Button text="Vote!" onClick={() => handleVote(selected)} />
    </>
  )
}

const Fav = ({votes,anecdotes}) => {
  let bestAnecdote = ""
  let bestVotes = -1
  for (let x=0; x<votes.length; x++) {
    if (votes[x]>bestVotes) {
      bestAnecdote = anecdotes[x]
      bestVotes = votes[x]
    }
  }
  return (
    <div>
      <div>Anecdote with the most votes: {bestAnecdote}</div>
      <div>Has {bestVotes} votes</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState([0,0,0,0,0])

  const handleGoodClick = () => setGood(good+1)

  const handleNeutralClick = () => setNeutral(neutral+1)

  const handleBadClick = () => setBad(bad+1)

  const anecdotes = [
    "benis sus",
    "I don't have any convictions",
    "When I die, just throw me in the trash",
    "I'm not superstitious, but I am a little stitious",
    "Well, well, well. How the turntables"
  ]

  const newAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const handleVote = (x) => {
    let newVotes = [...votes]
    newVotes[x] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
      <h1>Anecdote</h1>
      <Button text="Beep boop" onClick={newAnecdote} />
      <div>{anecdotes[selected]}</div>
      <Votes votes={votes} selected={selected} handleVote={handleVote}/>
      <h1>Favourite anecdote</h1>
      <Fav votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App