// import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import { TextField, InputLabel, Input, FormControl, Box, Button } from '@mui/material';

const Qr = () => {

  const [link, setLink] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [fgcolor, setFgColor] = useState('#000000');

  const [qrCode, setQrCode] = useState('JohnDoeSEARCh');

  const click = (e) => {
    e.preventDefault();
    console.log('click')
    console.log(link)
    setQrCode(link)

    // return up;


  }

  // const handleLinkChange = (e) => {
  //     console.log(e.target.value)
  //     setLink(e.target.value)
  // }

  const download = (e) => {
    e.preventDefault();
    const canvas = document.getElementById('canvas')
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QR.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);


    console.log(canvas)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          bgcolor: '#e3f2fd',
          p: 3,
          width: '50%',
          marginLeft: '25%',
          height: '60vh',
          overflow: 'hidden',
          borderRadius: '7px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}>
        <Box sx={{}}>
          <form onSubmit={click} >
            <TextField type="text" placeholder="Enter your text" name='link' value={link} onChange={(e) => setLink(e.target.value)} required />
            <br></br>
            <br />
            <label> Background Color </label>
            <input type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)}></input>
            <br></br>
            <br />
            <label> Foreground Color </label>
            <input type="color" name="fgcolor" value={fgcolor} onChange={(e) => setFgColor(e.target.value)}></input>
            <br></br>
            <br></br>
            <Button variant="contained" color="success" type='submit' > Generate QR </Button>


          </form>
        </Box>


        <Box sx={{


          right: { xs: 0, md: 'auto' },

          // border: '1px solid red',

        }}>
          <QRCodeCanvas id='canvas' value={qrCode} bgColor={color} fgColor={fgcolor} size={250} />
          <br />
          <br />


          <Button variant="contained" color="success" type='submit' onClick={download}> Download QR </Button>

        </Box>

      </Box>

    </>
  )
}

export default Qr