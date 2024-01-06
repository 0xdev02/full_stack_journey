function Profilepicture(){
    const imageUrl = './src/assets/Profilepic.jpeg';
    const handleClick = (e)=> e.target.style.display="none";
    const handleClick2 = (e)=> e.target.style.display="none";
    return(<>
        {/* <img onClick = {(e) => handleClick(e)} src={imageUrl} ></img> */}
        <img onDoubleClick = {(e) => handleClick2(e)} src={imageUrl} ></img>
        </>
      )
}

export default Profilepicture