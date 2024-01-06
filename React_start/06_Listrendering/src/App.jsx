import List from './List.jsx'
function App() {
      const fruits = [{id:1, name: "Apple", calories: 95 },
                    {id:2, name: "Banana", calories: 105 },
                    {id:3, name: "Orange", calories: 45 },
                    {id:4, name: "Mango", calories: 65 },];
      const vegetables = [{id:1, name: "Cabbage", calories: 95 },
                    {id:2, name: "Tomato", calories: 105 },
                    {id:3, name: "Brinjal", calories: 45 },
                    {id:4, name: "Radish", calories: 65 },];
    return(<>
        {fruits.length >0 && <List items={fruits} category="Fruits"/>}
        {vegetables.length >0 && <List items={vegetables} category="Vegetables"/>}
        
        </>);  
}

export default App
