import { PositionsChart, Position } from './PositionsChart';

const hardcodedPositions: Position[] = [
  {
    positionName: 'Take-down Techniques',
    techniques: [
      { techniqueName: 'Ogoshi - Hip Throw' },
      { techniqueName: 'Kosoto Gake - Outside Trip' },
    ],
  },
  {
    positionName: 'Mount',
    techniques: [
      { techniqueName: 'Americana - Keylock' },
    ]
  },
  { positionName: 'Back Control', techniques: [] },
  { positionName: 'Positional Control', techniques: [] },
  { positionName: 'Escapes', techniques: [] },
  { positionName: 'Side Control', techniques: [] },
  { positionName: 'Closed Guard', techniques: [] },
  { positionName: 'Open Guard', techniques: [] },
  { positionName: 'Guard Passing', techniques: [] },
  { positionName: 'Half Guard', techniques: [] },
];

function App() {
  return (
    <div className="App">
      <PositionsChart positions={hardcodedPositions}/>
    </div>
  );
}

export default App;
