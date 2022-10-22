import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <Skills/> */}
    </div>
  );
}

export default App;
