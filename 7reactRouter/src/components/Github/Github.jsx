// import React from 'react'
import { useLoaderData } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Github() {

    // const data=useLoaderData()

     const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

  return (
    <div className='bg-gray-500 text-white p-4 text-center text-3xl'>
        Github Followers:{data.followers}
      
    </div>
  )
}

export default Github

// export const githubInfoLoader=async()=>
// {
//     const response=await  fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }
