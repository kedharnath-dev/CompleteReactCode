import Contact from "./Components/Contact";
import About from "./Components/About";
import Homeclass from "./Components/Homeclass";
import Home from "./Home";

// functional component
function App() {
  return(
    <>
      <h1>Welcome to React</h1>
      <Home />
      <Contact />
      <About />
      <Homeclass />
    </>
  )
}

export default App;