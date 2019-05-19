import React from 'react'
import { Link } from 'gatsby';

const Navigation =() => {
  let list = ["programmeone", "programmetwo"]
  return (
    <nav>
      <ul>
        {
          list.map(i => { return <li>
          <Link to={i}>{i}</Link>
          </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation;
