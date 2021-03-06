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
      <h1 
        className='HeaderName'
        style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
          Mairéad Lee
        </Link>
      </h1>
      <h2 
        className='HeaderLink'
          style={{ 
          margin: 0, 
          alignItems: 'Center',     
          }}>
          <Link
            to="/about"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            About
          </Link>
      </h2>
      <h2 
        className='HeaderLink'
        style={{ 
          margin: 0, 
          alignItems: 'Center',     
          }}>
          <Link
            to="/work"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
          Work
        </Link>
      </h2>
      <h2 
        className='HeaderLink'
        style={{ 
          margin: 0, 
          alignItems: 'Center',     
          }}>
          <Link
            to="/blog"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
          Blog
        </Link>
      </h2>
      <h2 
        className='HeaderLink'
        style={{ 
          margin: 0, 
          alignItems: 'Center',     
        }}>
        <Link
          to="/contact"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
