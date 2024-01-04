import React, { useState } from 'react';

const Form = () => {
    const [min, setMin] = useState(-20);
    const [max, setMax] = useState(1000);
    const [randomNum, setRandomNum] = useState(null);


    const newRandomNumber = () => {

        const generatedNum = Math.floor(Math.random()*(max-min -1) + min);
        setRandomNum(generatedNum);
        console.log("Rastgelen sayı" , generatedNum)

    }

    return (
        <>
            <div className='container'>
                <form className='form'>
                    <h2>Sayı Üretme Uygulaması</h2>
                    <div className='input'>
                        <div className='random'>
                            <p>
                            Rastgele Sayı : <span>{typeof randomNum === 'number' ? randomNum : 'Sayı üretilmedi'}</span>
                            </p>
                        </div>
                        <div className='input-2'>
                            <div className='input-3'>
                                Min:
                                <input
                                    value={min}
                                    onChange={e => setMin(e.target.value)}
                                    type="number"
                                    placeholder='En küçük sayı değeri'
                                />
                            </div>
                            <div className='input-3' >
                                Max:
                                <input
                                    value={max}
                                    onChange={e => setMax(e.target.value)}
                                    type="number"
                                    placeholder='En büyük sayı değeri'
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={newRandomNumber} className='btn'>
                        Rastgele Sayı Üret
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form;
