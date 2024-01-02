import React, { useState } from 'react'

const Todo = () => {
    const [newItem, setNewItem] = useState("");
    const [item, setItem] = useState([]);

    function addItem() {

        if (!newItem) {
            alert("Lütfen boş bırakmayınız.");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }
        setItem(oldItem => [...oldItem, item])
        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = item.filter(item => item.id !== id);
        setItem(newArray);
    }
    return (
        <div className='container'>
            <div className='todo'>
                <h1>Todo List App</h1>

                <input type="text" placeholder='yapılacaklar ekle...'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button className='btn'
                    onClick={() => addItem()}
                >
                    Ekle
                </button>

                <div className='card'>
                    {item.map(item => {
                        return (
                            <p key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></p>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Todo