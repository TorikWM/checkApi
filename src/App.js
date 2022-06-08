import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cocktails from './components/Cocktails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Cocktails/>
    </div>
  );
}

export default App;
