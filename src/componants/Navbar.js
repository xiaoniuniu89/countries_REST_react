import { Link } from "react-router-dom";
import './Navbar.css'
import moon from '../assets/moon.svg'

export default function Navbar() {
  return (
    <div className="navbar border-box-shadow">
      <Link to='/'>
        <h1 className="logo">Where in the world?</h1>
      </Link>
      <div className="toggle-mode"><img src={moon}/><p>Dark Mode</p></div>
    </div>
  )
}
