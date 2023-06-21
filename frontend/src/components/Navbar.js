import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link className='link' to = "/">
                <h1 className='navbarTitle'>Workout Buddy</h1>
            </Link>
        </div>
    </header>
  )
}
