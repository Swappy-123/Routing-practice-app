// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="head-bg">
    <div className="first">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="image"
      />
      <p className="head-para">Wave</p>
    </div>
    <ul className="second">
      <li>
        <Link className="nav-para" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-para" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-para" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
