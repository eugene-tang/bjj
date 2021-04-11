import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PositionsChart, Position } from './components/PositionsChart';
import { VideoPage } from './components/VideoPage';
import { hardcodedPositions } from './hardcodedPositions';

interface RoutesProp {
  positions?: Position[];
}

export const Routes: React.FC<RoutesProp> = ({positions}) =>
<Switch>
  <Route exact path="/">
    <PositionsChart positions={positions || hardcodedPositions} />
  </Route>
  <Route path="/video">
    <VideoPage />
  </Route>
</Switch>;

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
