import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Userform from './UserForm'; // Import SignUp component
import NavBar from './NavBar'; // Import your navigation component
import UserForm from './UserForm';
import Portal from './components/Portal';

const Header = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} /> {/* Route for Home */}
          <Route exact path="/about" component={AboutUs} /> {/* Route for AboutUs */}
          <Route exact path="/contact" component={Contact} /> {/* Route for Contact */}
          <Route exact path="/login" component={Login} /> {/* Route for Login */}
          <Route exact path="/signup" component={UserForm} /> {/* Route for SignUp */}
          <Route path="/portal" component={Portal} /> {/* Route for Portal */}
        </Switch>
      </div>
    </Router>
  );
};

export default Header;

