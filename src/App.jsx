import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'

//useState returns an array, the array contains 2 elements 
//first is the value you're storing
//second is a function that can be used to reset the value

function App() {
  const [featPupId, setfeatPupId] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);

  function handleClick(puppyId) {
    setfeatPupId(puppyId)
  }
  console.log('puppyList: ', puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div className='App'>
        {puppies.map((puppy) => {
          return(
            <p onClick={() => {handleClick(puppy.id) }} key={puppy.id}>
            {puppy.name}</p>
          );
          })
        }
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
            </div>
        )}
      {/* {featPupId && <p>Selected Puppy ID: {featPupId}</p>} */}
      </div>
    </>
  );
}

export default App
