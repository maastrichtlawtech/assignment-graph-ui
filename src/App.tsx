import './App.css';
import Graph from "./components/Graph";

const graph = <Graph/>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
       { graph }
      </header>
    </div>
  );
}

export default App;
