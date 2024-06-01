import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm'; // Import SignUpForm component
import NavBar from './NavBar'; // Import your navigation component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} /> {/* Route for Home */}
          <Route exact path="/about" component={AboutUs} /> {/* Route for AboutUs */}
          <Route exact path="/contact" component={Contact} /> {/* Route for Contact */}
          <Route exact path="/login" component={Login} /> {/* Route for Login */}
          <Route exact path="/signup" component={SignUpForm} /> {/* Route for SignUpForm */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

