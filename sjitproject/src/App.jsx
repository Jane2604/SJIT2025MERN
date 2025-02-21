import Home from './components/FunctionalComponents/Home.jsx';
import ClassCompEG from './components/ClassComponents/ClassCompEG.jsx';
import About from './components/FunctionalComponents/About.jsx';
import Contact from './components/FunctionalComponents/Contact.jsx';
import Gallery from './components/FunctionalComponents/Gallery.jsx'; 
import Login from './components/FunctionalComponents/Login.jsx'; 
import Signup from './components/FunctionalComponents/Signup.jsx'; 
import Navbar from './components/FunctionalComponents/Navbar.jsx';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect.jsx';
import UseState from './components/FunctionalComponents/Hooks/UseState.jsx';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI.jsx';
import UseRef from './components/FunctionalComponents/Hooks/UseRef.jsx';
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo.jsx';
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback.jsx';
import UseMemoize from './components/FunctionalComponents/Hooks/UseMemoize.jsx';
import HoC from './components/FunctionalComponents/HoC/HoC.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home properties="Hello" sjit="SJIT" />} />
        <Route path='/ClassCompEG' element={<ClassCompEG />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/hoc' element={<HoC />}/>
        <Route path='/use-effect' element={<UseEffect />}/>
        <Route path='/use-state' element={<UseState />}/>
        <Route path='/use-effect-api' element={<UseEffectAPI />}/>
        <Route path='/use-ref' element={<UseRef />}/>
        <Route path='/use-memo' element={<UseMemo />}/>
        <Route path='/use-callback' element={<UseCallback />}/>
        <Route path='/use-memoize' element={<UseMemoize />}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
