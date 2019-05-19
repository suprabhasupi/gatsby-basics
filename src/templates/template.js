import React from 'react'
import Helmet from 'react-helmet'

export default function Template(props) {
  const {pageContext} = props;
  const {title} = pageContext

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}