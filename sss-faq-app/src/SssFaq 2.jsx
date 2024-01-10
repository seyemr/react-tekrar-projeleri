import React from 'react'

const SssFaq = ({title, active, setActive}) => {
  return (
    <div className='accordion'>
      <div className="accordionHeading">
        <div className="container">
          <p>Sorular</p>
          <button onClick={()=> setActive(title)}>Tıkla Bana</button>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"} >
        <div className='container'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed voluptas animi corrupti illo necessitatibus eos blanditiis 
            laudantium quam ipsam tempore similique, facere, qui nostrum 
            nihil tenetur hic doloribus aut veritatis.
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default SssFaq