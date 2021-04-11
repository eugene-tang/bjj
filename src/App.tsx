import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PositionsChart, Position } from './components/PositionsChart';
import { YouTubeLink } from './components/TechniqueItem';
import { VideoPage } from './components/VideoPage';
import { hardcodedPositions } from './hardcodedPositions';

interface RoutesProp {
  positions?: Position[];
}

export const Routes: React.FC<RoutesProp> = ({positions}) => {
  const [selectedVideo, setSelectedVideo] = React.useState<YouTubeLink>({title: '', videoId: ''});

  return <Switch>
    <Route exact path="/">
      <PositionsChart positions={positions || hardcodedPositions} setSelectedVideo={setSelectedVideo} />
    </Route>
    <Route path="/video">
      <VideoPage youTubeLink={selectedVideo} />
    </Route>
  </Switch>;
}

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
