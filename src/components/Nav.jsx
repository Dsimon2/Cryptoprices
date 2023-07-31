import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>Nav
<Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  )
}

export default Nav