import React from 'react'
import { useSelector } from 'react-redux'
import loading from '../../assets/imgLoading/loading.gif'

export default function Loading() {
  const {loadOpen} = useSelector(state => state.LoadingReducer)
  
  if (loadOpen) {
    return (
      <div style={{
          position:'fixed',
          height: '100vh',
          width:'100%',
          top:'0',
          left:'0',
          zIndex: '1000',
          overflow:'hidden',
          backgroundColor:'#e5eff1'
      }} className='flex items-center none justify-center'>
          <img src={loading} ></img>
      </div>
    )
  } else {
    return ''
  }

  
}
