import Home from './pages/home.js'
import PageNotFound from './pages/pageNotFound.js';
import SPA from './core/spa.js';
import Login from './pages/login.js';



/**
 * Create an instance of SPA
 *
 */
const app = new SPA({
  root: document.getElementById('app'),
  defaultRoute: Login,
});

// Add the login route
app.add('/', Login);

// our home page. by default you could define routes using string
app.add('/home', Home);


// or, you could also define a route using Regular Expression with or without named groups

// Ensure our app is running
app.handleRouteChanges();

