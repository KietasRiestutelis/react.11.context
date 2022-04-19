import React,  { useState, useContext} from 'react';
import {ReactContext} from "../App";


// export const ReactContext = createContext();

export default function Card({ name, email, id, image, location }) {
   const [counter, setCounter] = useState(0); 
   const value = useContext(ReactContext)

    function addLike(){
        setCounter((counter + 1));
        value.setLikes(value.likes + 1)
    }

    return (
       
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{name}</h4>
            </div>
            <div className="card-body">
                <img src={image} alt={name} />
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{email}</li>
                    <li>{location}</li>
                </ul>
                <button
                    onClick={() => addLike()}
                    type="button"
                    className= "btn btn-lg btn-block btn-outline-primary">{counter}
                </button>
            </div>
        </div>
    )
}
