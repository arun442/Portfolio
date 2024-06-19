import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import ParentComponent from './search';

function App() {
  return (
    <div className="App">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3404552745122916"
     crossorigin="anonymous"></script>
      </head>

     <div className='main'>
     <Routes>
           <Route exact path="/" element={<Home />}/>
           <Route path='/search' element={<ParentComponent/>}/>

         </Routes>
     </div>
    </div>
  );
}

export default App;
