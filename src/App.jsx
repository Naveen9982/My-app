import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from  './Components/Home'
import  About  from './Components/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     
      <Routes>
<Route path='/' element ={ <Home/>}/>
<Route path='/about' element = {<About/>}/>
        


      </Routes>
      
      
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
