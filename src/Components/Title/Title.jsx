import React from 'react'
import './Title.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      {/* <p>کارەکانمان</p>
      <h2>ئێمە چی دەکەین</h2> */}
      <h2>{title}</h2>
    </div>
  )
}
import './Title.css'

export default Title
