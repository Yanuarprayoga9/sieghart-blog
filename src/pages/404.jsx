import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div
            className="min-h-screen w-full flex justify-center items-center flex-col"
        >
            <p className='text-2xl '>NotFound</p>
            <Link to={'/'} className="text-slate-700">Go home</Link>
        </div>
    )
}

export default NotFound