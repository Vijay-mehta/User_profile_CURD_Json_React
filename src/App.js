import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Edit from './pages/Edit';
import List from './pages/List';
import View from './pages/View';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/list" element={<List/>}/>
        <Route exact path="/view" element={<View/>}/>
        <Route exact path="/edit" element={<Edit/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
