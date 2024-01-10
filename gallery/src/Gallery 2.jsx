import React, { useState } from 'react'
import image from './Image';


const Gallery = () => {
    const [selectedImg, setSelectedImg] =useState(image[0]);
    return (
        <div className='app'>
            <h1>My Gallery</h1>
            <div className="container">
                <img src={selectedImg} alt="Selected" className='selected' />
            </div>
            <div className="imgContainer">
                {image.map((img, i)=>(
                    <img key={i} src={img} alt="cami"
                        onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>

        </div>
    )
}

export default Gallery