import React from 'react'

const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
  return (
    
      <h1> name - {data[2].username}</h1> 

   
  )
}

export default page