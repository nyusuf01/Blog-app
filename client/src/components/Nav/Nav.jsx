import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          TeamBlogApp
        </NavLink>
        <div className="nav-links">
          <NavLink to="/">Posts</NavLink>
          <NavLink to="/add">Add Post</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
