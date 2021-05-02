  
import './App.css';
//import Home from "./Components/Home";
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      
      { /* <Home /> */ }
      <div className="display-login-center">
        <center><p class="h1">Login</p></center><br/>
        <Login />
      </div>
      
    </div>
  );
}

export default App;