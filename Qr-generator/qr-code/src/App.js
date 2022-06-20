import React from 'react'
import { Button , Typography} from '@mui/material'
import { click } from '@testing-library/user-event/dist/click'
import Qr from './Components/Qr'
import './App.css'

const App = () => {
  const click=()=>{
    console.log('clicked')
  }


  return (
    <>
    <div className='bo'>

   
    <Typography variant="h3" component="h2" sx={{
      fontFamily: 'monospace',
      color: 'White',
    }}>
    QR Code Generator
</Typography>;
  
    <Qr />
  
    
    </div>
    </>
  
  )

  //  const click=()=>{
  //   console.log('clicked')
  // }
}

export default App