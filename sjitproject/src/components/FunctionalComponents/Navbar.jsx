import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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