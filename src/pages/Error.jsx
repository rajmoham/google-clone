import React from 'react'

const Error = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col text-center'>
                <p className='text-3xl font-bold'>
                    Uh oh! This URL is invalid :(</p>
                <p className='font-semibold mt-4'>
                    <a href='/' className='text-blue-600 underline'>Click here </a> 
                    to return to the main page</p>    
            </div>
        </div>
    )
}

export default Error