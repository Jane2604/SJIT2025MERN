import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/Signup'>SignUp</Link></li>
          <li><Link to='/Gallery'>Gallery</Link></li>
          <li class="memo-container">
            <span
              style={{color:"white",cursor:"pointer"}}
              onClick={()=>setDropdownVisible1(!dropdownVisible1)}>Memoization
            </span>
            {dropdownVisible1 && (
              <ol>
                <li><Link to='/memo'>Memo</Link></li>
                <li><Link to='/lazy'>Lazy Loading</Link></li>
                <li><Link to='/number-file'>Number File</Link></li>
              </ol>
            )}
          </li>
          <li class="prop-container">
            <span
              style={{color:"white",cursor:"pointer"}}
              onClick={()=>setDropdownVisible2(!dropdownVisible2)}>Prop drilling
            </span>
            {dropdownVisible2 && (
              <ol>
                <li><Link to='/coe'>CoE</Link></li>
                <li><Link to='/exam'>Exam</Link></li>
                <li><Link to='/faculty'>Faculty</Link></li>
                <li><Link to='/student-results'>Student Results</Link></li>
              </ol>
            )}
          </li>
          <li><Link to='/hoc'>HoC</Link></li>
          <li className="hooks-container">
            <span 
              style={{ color: "white", cursor: "pointer" }} 
              onClick={() => setDropdownVisible(!dropdownVisible)}>Hooks </span>
              {dropdownVisible && (
              <ol>
                <li><Link to='/use-state'>useState</Link></li>
                <li><Link to='/use-effect'>useEffect</Link></li>
                <li><Link to='/use-effect-api'>useEffectAPI</Link></li>
                <li><Link to='/use-ref'>useRef</Link></li>
                <li><Link to='/use-memo'>useMemo</Link></li>
                <li><Link to='/use-callback'>useCallback</Link></li>
                <li><Link to='/use-memoize'>useMemoize</Link></li>
              </ol>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;