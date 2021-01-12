import HomePage from './pages/HomePage.js';
import JobPage from './pages/JobPage.js';
import SkillPage from './pages/SkillPage.js';
import ZipcodePage from './pages/ZipcodePage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'

function App() {
  return ( 
    <div className = 'app'>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jobs" component={JobPage} />
        <Route exact path="/skills" component={SkillPage} />
        <Route exact path="/zipcode" component={ZipcodePage} />
      </Router>
    </div>
  );
}

export default App;
