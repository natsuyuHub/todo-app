import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import Container from '@mui/material/Container'
import './index.css'
import Home from './Home'
import Data from './Data'
import TodoList from './TodoList'

ReactDOM.render(
  <BrowserRouter>
    <Container maxWidth="md">
      <nav className="menu-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">TodoList</Link></li>
          <li><Link to="/data">Data</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/todo"><TodoList /></Route>
        <Route exact path="/data"><Data /></Route>
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
)
