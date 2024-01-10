import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);

    function showMoreFood() {
        setVisible(item => item += 3);
    }

    useEffect(() => {
        fetch("https://themealdb.com/api/json/v1/1/filter.php?a=Italian")
            .then((res) => res.json())
            .then((data) => setItems(data.meals));
    }, [])

    return (
        <div className="App">
            <h1 className='header'>İtalyan Yemekleri <img src='https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' /></h1>
            <div className='container'>
                {items.slice(0, visible).map(item => (
                    <div className='card'>
                        <div className='image'>
                            <img src={item.strMealThumb} />
                        </div>
                        <p>{item.strMeal}</p>
                    </div>
                ))}
                <button onClick={showMoreFood}>Daha Fazla Yemek İçin Tıklayın</button>
            </div>
        </div>
    );
}

export default App;