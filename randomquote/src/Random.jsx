import React, { useEffect, useState } from 'react'

const Random = () => {
    const [quotes, setQuotes] = useState("");
    const getQuote = () => {
        fetch("https://sozluk.gov.tr/atasozu")
            .then((res) => res.json())
            .then((data) => {
                console.table(data[1])
                let randomNum = Math.floor(Math.random() * data.length)
                setQuotes(data[randomNum])
            });
    }
    useEffect(() => {
        getQuote();
    }, [])

    return (
        <div className='container'>

            <div className='soz'>
                <h2>Söz</h2>
                <p>{quotes.sozum}</p>
            </div>

            <div className='soz'>
                <h2>Anlamı</h2>
                <p> {quotes.anlami}</p>
            </div>


            <div className='soz'>
                <h2>Türü </h2>
                <p> {quotes.turu2}</p>
            </div>

            <div className='btn'>
                <button onClick={getQuote}>Rastgelen Söz</button>
            </div>
        </div>
    )
}

export default Random