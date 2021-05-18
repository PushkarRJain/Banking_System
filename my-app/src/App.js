import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/home';
import Footer from './components/footer';
import ViewCust from './components/viewcust';
import TransMon from './components/transmon';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Custinfo from './components/custinfo';
/* In normal html,css,node we make get req and then server sends us the page every time, but in react we make this process efficient, we make the get req once and then we don't interact with server again, we simply render different componenets ysing js
Now here the navbar and footer are constant, tey never change the in-between content only changes.
So we have directly rendered <Navbar/> and <Footer/>
As the between content is gonna change, we have put it in a diff just for identification purpose and then put in in switchtag, its simply like switch statement, whatever route we give the switch statement matched it with a path of the diff router tag it has and then renders the component of the matching path
There is just one problem when we say /viewcust or /transmon react sees that / is present so it simply renders homepage, to avoid this prob, we use the keyword exact with tells react to exactly match the entire path and not just the beginnnig part*/
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="Content">
      <Switch>
      <Route exact path="/">
      <Content />
      </Route>
      <Route path="/transmon">
      <TransMon />
      </Route>
      <Route path="/viewcust">
      <ViewCust />
      </Route>
      <Route path="/custinfo/:name">
      <Custinfo />
      </Route>
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
