import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Fruitsandveg from './Components/Fruitsandveg';
import Tea from './Components/Tea';
import Ghee from './Components/Ghee';
import Freshvegetables from './Components/Freshvegetables';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Fruitsandveg}/>
          <Route path='/Tea' Component={Tea}/>
          <Route path='/Ghee' Component={Ghee}/>
          <Route path='/Freshvegetables' Component={Freshvegetables}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Cart' Component={Cart}/>
        </Routes>
      </Router>
  );
}

export default App;
