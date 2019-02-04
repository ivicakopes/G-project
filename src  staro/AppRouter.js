import React from 'react';
import Log from './Log'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ResponsiveDrawer from './ResponsiveDrawer';
import Details from './Details';
import Stavke from './Stavke';
const Index = () => <h2>Home</h2>;
//const About = () => <h2>About</h2>;
//const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <h4>approuter</h4>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login2/">About</Link>
          </li>
          <li>
            <Link to="/ResponsiveDrawer/">Responsive Drawer</Link>
          </li>
          <li>
            <Link to="/Details/">User Details</Link>
          </li>
          <li>
            <Link to="/Stavke/">Spisak stavki</Link>
          </li>
        </ul>
      </nav>
      <hr/>

      <Route path="/" exact component={Index} />
      <Route path="/login2/" component={Log} /> 
      <Route path="/ResponsiveDrawer/" component={ResponsiveDrawer} />
      <Route path="/Details/" component={Details} /> 
      <Route path="/Stavke/" component={Stavke} /> 
    </div>
  </Router>
);

export default AppRouter;


