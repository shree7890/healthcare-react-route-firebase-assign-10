
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/FooterBottom/FooterBottom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
import Serviceget from './components/Serviceget/Serviceget';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Serviceget></Serviceget>
            </Route>
            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
          <FooterBottom></FooterBottom>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
