import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
// import { Dashboard } from "./components/Dashboard";
import React, { Suspense } from "react"
// import Landing  from "./components/Landing";
const Landing = React.lazy(() => import("./components/Landing"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="/" element={<Suspense fallback={<div>Loading....</div>}>
              <Landing />
            </Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

function Appbar() {
  const navigate = useNavigate() // useNavigate needs to be inside BrowserRouter
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/")
          }}>
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard")
          }}>
          Dashboard
        </button>
      </div>
    </div>
  )
}
export default App
