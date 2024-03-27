import React, { useEffect, useState } from 'react';

function Github() {

    const [data , setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/sahil-578')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Github Profile Image" width={300} className=' rounded-md '/>
        </div>
    )
}

export default Github