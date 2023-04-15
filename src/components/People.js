import React, { useState } from 'react'
import { data } from '../Data'
const People = () => {

    const [people, setPeople] = useState(data)

    const handleSearch = (e) => {
       let value = e.target.value.toLowerCase()
       console.log(value)

    //   let filtered = if (person.age >= 31 && person.age)

    }

  return (
    <div>
        <label>Input Age</label><br/>
        <input onClick={handleSearch} type="number"/>
        {
            people.map((person) => (
                <h1>{person.name}, {person.age}</h1>
                
                
            ))
        }
    </div>
  )
}

export default People