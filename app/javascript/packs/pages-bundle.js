import ReactOnRails from 'react-on-rails';

import Landing from '../bundles/pages/Landing';
import LoginPage from '../bundles/pages/LoginPage';
// import Hola from '../bundles/pages/Index';
import ProfilePage from '../bundles/pages/ProfilePage';
import LandingPage from '../bundles/pages/LandingPage/LandingPage';
import Components from '../bundles/pages/Components/Components';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Landing,
  LoginPage,
  // Hola,
  ProfilePage,
  LandingPage,
  Components
});
