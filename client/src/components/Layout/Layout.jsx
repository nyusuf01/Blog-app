import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import "./Layout.css"

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
