import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Banana","Mango"]);
    function handleAddFood(event){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f => [...f, newFood]);
    };
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i!==index))
    }
    return (
       <div>
        <h2>List of Food</h2>
        <p>{foods.map((food, index)=><li key={index} onClick={()=> handleRemoveFood(index)} >
            {food}
            </li> )}
            </p>
        <input type="text" id='foodInput' placeholder="Enter your Food Name" />
        <button onClick={handleAddFood}>Add Food</button>
       </div>
    );
}

export default MyComponent
