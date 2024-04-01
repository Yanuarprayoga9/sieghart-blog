import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div
            classname="min-h-screen flex justify-content-center items-center text-2xl flex-col"
        >NotFound
            <Link to={'/'} classname="text-slate-700">Go home</Link>
        </div>
    )
}

export default NotFound