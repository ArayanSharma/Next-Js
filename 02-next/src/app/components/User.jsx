import React from 'react'


const User = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)

  return (
    <div className='flex flex-col justify-center gap-4 px-3 py-5 bg-amber-500'>
         {data.map((user) => (
       <h1 key={user.id} className='text-red-600 text-2xl font-bold w-full'>
         ID: {user.id} | {user.name} | City: {user.address.city}
       </h1>
       ))}
    </div>
  )
}

export default User;
