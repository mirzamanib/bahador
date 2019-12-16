import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Landing from '../bundles/pages/componentns/Landing';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Landing,
});
