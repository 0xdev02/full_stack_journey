function Button(){
    
    const handleClick = (e)=> {
            e.target.textContent = "OUCH !";
        };
    return(
        <button className="Button" onClick={(e) => handleClick(e)}>Click Me </button>
    );
}

export default Button