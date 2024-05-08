import React, { useState } from "react"

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="Paarth2" />
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("paarth1");
  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title} />
  </div>

}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
