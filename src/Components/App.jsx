import Person from './Person'
import data from '../HardCoded/Constants'

function App() {
  return (
    <>
      {
        data.map((data) =>  <Person key={data.email} name = {data.name} email = {data.email} /> )
      }
    </>
  )
}

export default App
