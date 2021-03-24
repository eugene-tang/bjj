import './App.css';
import { PositionsChart } from './PositionsChart';

function App() {
  return (
    <div className="App">
      <PositionsChart positions={['Mount', 'Side Control', 'Back Control']}/>
    </div>
  );
}

export default App;
