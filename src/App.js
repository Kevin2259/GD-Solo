import './App.css';
import Nav from './Nav';
import College from './College';
import Info from './Info';
import Quiz from './quiz';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/college" component={College} />
          <Route path="/info" component={Info}/>
          <Route path="/quiz" component={Quiz}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

const Welcome = () => (
  <div>
    <h1>Welcome Page</h1>
  </div>
)

export default App;
