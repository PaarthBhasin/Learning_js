import './App.css'

function App(){
  return <div>
    <CardWrapper>
      <div>hi there</div>
    </CardWrapper>
  </div>
}

function CardWrapper({children}){
  console.log(children)
  return(
    <div style={{border:"2px solid black", padding: 20}}>
      {children}
    </div>
  )
}
export default App;