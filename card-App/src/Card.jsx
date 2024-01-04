import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cardBody'>
                <img src={props.img} alt="" />
                <div className="about">
                    <h2 className="cardTitle">{props.title}</h2>
                    <p className="cardDescription">{props.description}</p>
                </div>
                <button>Detay</button>
            </div>
        </div>
    )
}

export default Card