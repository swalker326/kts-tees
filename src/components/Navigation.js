import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from '../views/Home'
import Line from '../views/Line'

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className='Navigation' >
            <Navbar bg='light' expand='lg'>
              <Navbar.Brand>
                <Link className='nav-brand' to='/'>K Tees</Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                  <Link className='nav-link' to='/womans'>Woman's</Link>
                  <Link className='nav-link' to='/mens'>Men's</Link>
                  <Link className='nav-link' to='/kids'>Kid's</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/womans'>
            <Line type='womans' />
          </Route>
          <Route path='/mens'>
            <Line type='mens' />
          </Route>
          <Route path='/kids'>
            <Line type='kids' />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default Navigation