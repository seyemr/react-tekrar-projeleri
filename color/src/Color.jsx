import React, { useState } from 'react'

const Color = () => {
    const [hex, setHex] =useState("#ffffff");

    function randomHex(){
        const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
        setHex(randomhex)
    }
  return (
    <div className='App' style={{backgroundColor:`${hex}`}}>
        <h1>{hex}</h1>
        <button onClick={randomHex}> Yeni Arkaplan Rengi</button>
        <button onClick={() => navigator.clipboard.writeText(hex)} >Rengi Kopyala</button>

    </div>
  )
}

export default Color