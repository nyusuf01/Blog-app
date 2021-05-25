import "./App.css"
import React from "react"
import { Switch, Route } from "react-router-dom"
import PostDetail from "./screens/PostDetail/PostDetail"
import Home from "./screens/Home/Home"
import PostEdit from "./screens/PostEdit/PostEdit.jsx"
import PostCreate from "./screens/PostCreate/PostCreate"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/posts/add" component={PostCreate}></Route>
        <Route exact path="/posts/:id/edit" component={PostEdit}></Route>
        <Route exact path="/posts/:id" component={PostDetail}></Route>
      </Switch>
    </div>
  )
}

export default App
