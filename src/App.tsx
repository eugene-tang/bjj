import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PositionsChart } from './components/PositionsChart';
import { hardcodedPositions } from './hardcodedPositions';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PositionsChart positions={hardcodedPositions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
