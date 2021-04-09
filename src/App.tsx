import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PositionsChart, PositionsChartProps } from './components/PositionsChart';
import { VideoPage } from './components/VideoPage';
import { hardcodedPositions } from './hardcodedPositions';

const App: React.FC<PositionsChartProps> = ({positions}) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PositionsChart positions={positions || hardcodedPositions} />
          </Route>
          <Route path="/video">
            <VideoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
