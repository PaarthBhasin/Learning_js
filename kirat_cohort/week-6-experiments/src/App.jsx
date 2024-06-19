function App(){
  return <div className="grid grid-cols-12">
    <div className="col-span-12 sm:col-span-5 bg-red-500 text-lg rounded-lg">Hi there from first class</div>
    <div className="col-span-12 sm:col-span-5 bg-green-500 text-lg rounded-lg">Hi there from second class</div>
    <div className="col-span-12 sm:col-span-2 bg-yellow-400 text-lg rounded-lg">Hi there from third class</div>
  </div>
}

export default App;