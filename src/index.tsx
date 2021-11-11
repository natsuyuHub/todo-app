import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import Container from '@mui/material/Container'
import './index.css';
import App from './App';
import TodoList from './TodoList';

ReactDOM.render(
  <BrowserRouter>
    <Container maxWidth="md">
      <nav className="menu-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">TodoList</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><App /></Route>
        <Route exact path="/todo"><TodoList /></Route>
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
);
