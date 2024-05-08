import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} >
        
          
        </Route>
        <Route path='/dashboard' element={<Dashboard/>} >
        
          
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
