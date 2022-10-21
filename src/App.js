import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
