import React from 'react'

export default function Button({type, text}) {
  return (
    <div className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}>{text}</div>
  )
}
