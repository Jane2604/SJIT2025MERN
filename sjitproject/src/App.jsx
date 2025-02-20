import Home from './components/FunctionalComponents/Home.jsx';
import ClassCompEG from './components/ClassComponents/ClassCompEG.jsx';
import About from './components/FunctionalComponents/About.jsx';
import Contact from './components/FunctionalComponents/Contact.jsx';
import Gallery from './components/FunctionalComponents/Gallery.jsx'; 
import Login from './components/FunctionalComponents/Login.jsx'; 
import Navbar from './components/FunctionalComponents/Navbar.jsx';
import UseEffect from './components/FunctionalComponents/Hooks/useEffect.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home properties="Hello" sjit="SJIT" />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/use-effect' element={<UseEffect />}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
