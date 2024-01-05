import Student from './Student'
function App() {
    return(
      <>
        <Student name="spongebob" age={'30'} isStudent={true}/>
        <hr></hr>
        <Student name="Sandy" age={53} isStudent={false}/>
        <hr></hr>
        <Student/>
        <hr></hr>
        <Student name="patrick" age={42} isStudent={false}/>
      </>
    );  
}

export default App
