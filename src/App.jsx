import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'

//useState returns an array, the array contains 2 elements 
//first is the value you're storing
//second is a function that can be used to reset the value

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log('puppyList: ', puppyList);
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
    </>
  );
}

export default App
