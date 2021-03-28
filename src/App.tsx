import { PositionsChart } from './PositionsChart';
import { hardcodedPositions } from './hardcodedPositions';

function App() {
  return (
    <div className="App">
      <PositionsChart positions={hardcodedPositions}/>
    </div>
  );
}

export default App;
