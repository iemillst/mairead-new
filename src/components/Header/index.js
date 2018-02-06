import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr',
        alignItems: 'Center',     
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <h2 style={{ 
        margin: 0, 
        color: 'black',
        alignItems: 'Center',     
        }}>
        About
      </h2>
      <h2 style={{ 
        margin: 0, 
        color: 'black',
        alignItems: 'Center',     
        }}>
        Work
      </h2>
      <h2 style={{ 
        margin: 0, 
        color: 'black',
        alignItems: 'Center',     
        }}>
        Hire me
      </h2>
      <h2 style={{ 
        margin: 0, 
        color: 'black',
        alignItems: 'Center',     
        }}>
        Contact
      </h2>
    </div>
  </div>
)

export default Header
