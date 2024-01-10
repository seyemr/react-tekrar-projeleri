import React, { useState } from 'react'
import data from "./Json";

const DateReminder = () => {
    const [holidays, setHolidays] = useState(data)

    function deleteItem(title){
        const newArray = holidays.filter((holiday) => holiday.title !== title)
        setHolidays(newArray)
    }
  return (
    <main>
        <section className='container'>
            <h3>Ulusal Tatil Günleri</h3>
            {holidays.map((holiday)=>{
                return(
                    <div className='holiday' key={holiday.id}>
                        <img src={holiday.img} alt="" />
                        <div className='border'>
                            <div>
                            <p className='title'>{holiday.title} <button onClick={() => deleteItem(holiday.title)}>X</button></p>
                            </div>
                            <p>{holiday.date}</p>
                        </div>
                    </div>
                )
            })}
            <button className='btn' onClick={()=> setHolidays([])}>Herşeyi Temizle</button>
        </section>
    </main>
  )
}

export default DateReminder