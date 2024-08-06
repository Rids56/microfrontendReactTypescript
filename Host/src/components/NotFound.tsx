import React, { ReactElement } from 'react'

export const NotFound: React.FC = (): ReactElement => {
  return (
    <div className='container'>
        <div>404</div>
        <span>Page Not Found</span>
    </div>
  )
}