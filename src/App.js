import * as C from './App.style'
import Routes from './routes/routes';

function App() {
  return (
    <div className="App"  >
      <header className="App-header">
        <C.Container>
          <Routes/>
        </C.Container>
      </header>
    </div>
  );
}

export default App;
