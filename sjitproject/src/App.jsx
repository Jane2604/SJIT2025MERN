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
import HoC from './components/FunctionalComponents/HoC/HoC.jsx';
import LazyLoadingAndSuspense from './components/FunctionalComponents/Memoization/LazyLoadingAndSuspense.jsx';
import NumberFile from './components/FunctionalComponents/Memoization/NumberFile.jsx';
import Memo from './components/FunctionalComponents/Memoization/memo.jsx';
import StudentResults from './components/FunctionalComponents/ContextAPI/StudentResults.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Faculty from './components/FunctionalComponents/ContextAPI/Faculty.jsx';
import CoE from './components/FunctionalComponents/ContextAPI/CoE.jsx';
import Exam from './components/FunctionalComponents/ContextAPI/Exam.jsx';
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
        <Route path='/memo' element={<Memo />}/>
        <Route path='/lazy' element={<LazyLoadingAndSuspense/>}/>
        <Route path='/use-effect' element={<UseEffect />}/>
        <Route path='/use-state' element={<UseState />}/>
        <Route path='/use-effect-api' element={<UseEffectAPI />}/>
        <Route path='/use-ref' element={<UseRef />}/>
        <Route path='/use-memo' element={<UseMemo />}/>
        <Route path='/use-callback' element={<UseCallback />}/>
        <Route path='/use-memoize' element={<UseMemoize />}/>
        <Route path='/number-file' element={<NumberFile/>}/>
        <Route path='/student-results' element={<StudentResults/>}/>
        <Route path='/coe' element={<CoE/>}/>
        <Route path='/exam' element={<Exam />}/>
        <Route path='/faculty' element={<Faculty/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
