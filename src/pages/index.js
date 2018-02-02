import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='gridContainer'>
    <div
    style={{
    display:'grid',
    gridTemplateColumns: '2fr 1fr 1fr'
  }}
    >
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
