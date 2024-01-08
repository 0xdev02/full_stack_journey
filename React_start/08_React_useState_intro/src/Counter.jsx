
import  React, { useState }  from "react";

function Counter (){
    const [number, setNumber] = useState(0);
    const incrementNumber = ()=>{
        setNumber(number + 1);
    }
    const clearNumber = ()=>{
        setNumber(0);
    }
    const decrementNumber = ()=>{
        setNumber(number - 1);
    }


    return(
        <div className="counter-body">
            <p className="counter-number">{number}</p>
            <div>
                <button className="counter-button" onClick={incrementNumber} >Increment Number</button>
                <button className="counter-button" onClick={clearNumber}>clear Number</button>
                <button className="counter-button" onClick={decrementNumber}>Decrement Number</button>
            </div>
        </div>

    );
}

export default Counter