import React from 'react';

import './App.css';
import Home from './components/home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/about.js'
import Projects from './components/projects.js'
import Travel from './components/travel.js'
import Education from './components/education.js'
import Resume from './components/resume.js'

import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
    const Styles = styled.div`
          .navbar {
            background-color: grey;
            display:flex;
          }
        
          a, .navbar-brand, .navbar-nav .nav-link {
            color: #red;
            color: white;

            &:hover {
              color: black;
            }
          }
        `;
    
  return (
      <div>
      <Styles>
    <Navbar expand="lg" bg="dark" variant="light" >
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
       
      
       <Router>
            <Nav.Item>
            <Nav.Link href="/"> Home </Nav.Link>
            </Nav.Item>
      <Nav.Item>
            <Nav.Link>
         <Link to="/about"> About Me </Link>
            </Nav.Link>
            </Nav.Item>
      <Nav.Item>
            <Nav.Link>
         <Link to="/projects"> Projects </Link>
            </Nav.Link>
            </Nav.Item>
      <Nav.Item>
            <Nav.Link>
         <Link to="/travel"> Travel </Link>
            </Nav.Link>
            </Nav.Item>
      <Nav.Item>
            <Nav.Link>
         <Link to="/education"> Education </Link>
            </Nav.Link>
            </Nav.Item>
       <Nav.Item>
            <Nav.Link>
         <Link to="/resume"> Resume </Link>
            </Nav.Link>
            </Nav.Item>
        
       
        
        <Switch>
        <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
           
          <Route path="/projects" component={Projects} />
           
        <Route path="/travel" component={Travel} />
           
        <Route path="/Resume" component={Resume} />
          
        <Route path="/education" component={Education} />
            
        </Switch>
        
        </Router>
      </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  </Styles >
    </div>
  );
}

export default App;
