function Food(){
    
        const food1 = "orange";
        const food2 = "mango";
        const food3 = "biryani";
    return(
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>

    );
}

export default Food
