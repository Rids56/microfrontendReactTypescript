import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = (): ReactElement => {
  return (
    <div className='navBar'>
        <Link to="/">
            Home
        </Link>
        <Link to="/mfe1">
            ToDo
        </Link>
        <Link to="/mfe2">
            SharedRouter
        </Link>
        <Link to="/mfe3">
            SharedState
        </Link>
    </div>
  )
}
