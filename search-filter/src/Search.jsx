import React,{useState} from 'react'
import Data from "./Data.json"


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='container'>
        <h1>Türk İslam Bilginleri</h1>
        <div className='inputContainer'>
            <input className='search' type="text" placeholder='islam bilgini giriniz...'
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </div>
        <div className='dataContainer'>
            {
                Data
                .filter((val)=>{
                    if(searchTerm == ""){
                        return val;
                    }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((val)=>{
                    return(
                        <div className='data' key={val.id}>
                            <img src={val.image} />
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                            <h4>{val.date}</h4>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search