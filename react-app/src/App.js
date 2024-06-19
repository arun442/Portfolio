import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../../src/Home';

function App() {
  return (
    <div className="App">
     <div className='main'>
     <Routes>
           <Route exact path="/" element={<Home />}/>
         </Routes>
     </div>
    </div>
  );
}

export default App;
