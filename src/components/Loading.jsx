import React from 'react'
import {BallTriangle} from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <BallTriangle  type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  )
}
