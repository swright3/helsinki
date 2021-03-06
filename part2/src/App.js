import { useState } from 'react'
import Number from './components/Number'
import Form from './components/Form'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "0800-00-1066" },
    { name: 'Danny Devito', number: "80085" },
    { name: 'Charlie Kelly', number: "6R33N-M4N" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const checkName = () => {
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already in your contacts`)
      return false
    }
    return true
  }

  const checkNumber = () => {
    if (persons.some((person) => person.number === newNumber)) {
      window.alert(`${newNumber} is already in your contacts`)
      return false
    }
    return true
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (checkName() && checkNumber()) {setPersons(persons.concat({
      name: newName,
      number: newNumber
    }))}
    setNewName('')
    setNewNumber('')
  }

  const namesToShow = persons.filter((person) => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <h3>Filter: <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/></h3>
      {namesToShow.map((person) => <Number key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App