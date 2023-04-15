import React, { useState } from 'react'
import CardDetails from './CardDetails'

const Card = () => {

    const [data, setData] = useState([])

  const getData = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
    .then((res) => (res.json()))
    .then((json) => {
        setData(json)
        console.log('json', json)
        return;

    })
  }
        
  React.useEffect(() =>{
getData()
  }, [])
       

  return (
    <div className='card-container flex flex-wrap justify-evenly text-gray-300'>
        {
            data.map((item) => (
                <CardDetails
                    item={item}
                />
            ))
        }
        
    </div>
  )
}

export default Card