import './App.css';
import { PositionsChart, Position } from './PositionsChart';

const hardcodedPositions: Position[] = [
  { positionName: 'Take-down Techniques', technique: [] },
  { positionName: 'Mount', technique: [] },
  { positionName: 'Back Control', technique: [] },
  { positionName: 'Positional Control', technique: [] },
  { positionName: 'Escapes', technique: [] },
  { positionName: 'Side Control', technique: [] },
  { positionName: 'Closed Guard', technique: [] },
  { positionName: 'Open Guard', technique: [] },
  { positionName: 'Guard Passing', technique: [] },
  { positionName: 'Half Guard', technique: [] },
];

function App() {
  return (
    <div className="App">
      <PositionsChart positions={hardcodedPositions}/>
    </div>
  );
}

export default App;
