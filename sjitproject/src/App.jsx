import Home from './components/FunctionalComponents/Home.jsx';
import ClassCompEG from './components/ClassComponents/ClassCompEG.jsx';
import About from './components/FunctionalComponents/About.jsx';
import Contact from './components/FunctionalComponents/Contact.jsx';
import Gallery from './components/FunctionalComponents/Gallery.jsx'; 
import Login from './components/FunctionalComponents/Login.jsx'; 
import Navbar from './components/FunctionalComponents/Navbar.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <ClassCompEG />
      <hr />
      <Home properties="Hello" sjit="SJIT"  />
      <hr />
      <About />
      <hr />
      <Gallery />
      <hr />
      <Contact />
      <hr />
      <Login />
    </div>
  );
}
export default App;
