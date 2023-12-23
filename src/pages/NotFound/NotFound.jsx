import React from 'react'
import notFound from '../../../public/404.gif'

export default function NotFound() {
  return (
    <div style={{width: '100%',height: '100vh',background: '#010002',display: 'flex',justifyContent: 'center',alignItems: 'center'}} >
      <img  src={notFound} alt="Not Found" />
    </div>
  )
}
