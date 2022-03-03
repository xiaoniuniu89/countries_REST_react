import { Link } from "react-router-dom";
import './Navbar.css'
import moon from '../assets/moon.svg'
import { useTheme } from "../hooks/useTheme";


export default function Navbar() {

  const { changeMode, mode } = useTheme()

const toggleMode = () => {
  changeMode(mode === 'dark' ? 'light' : 'dark')
}

  return (
    <div className={`navbar border-box-shadow ${mode}`}>
      <Link to='/'>
        <h1 className={`logo ${mode}`}>Where in the world?</h1>
      </Link>
      <div onClick={toggleMode} className="toggle-mode"><img src={moon} alt='dark/light toggle' style={{filter: mode === 'dark' ? 'invert(95%)' : 'invert(20%)'}}/><p className={`${mode}`}>Dark Mode</p></div>
    </div>
  )
}
