import { Outlet } from "react-router"
import Navbar from "./layout/Navbar"
// import HeroSection from "./pages/Home"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      {/* <HeroSection></HeroSection> */}
    </>
  )
}

export default App
