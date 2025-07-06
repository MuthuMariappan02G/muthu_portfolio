import Contact from "./component/Contact";
import Home from "./component/Home";
import Sidenav from "./component/SideBar";
import Work from "./component/Work";
// import Projects from "./component/Projects";

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
      {/* <Projects /> */}
      <Contact />
      
    </div>
  );
}

export default App;
