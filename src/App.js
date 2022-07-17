import './App.css';
import Chatside from './Components/Chatside';
import Topbar from './Components/Topbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nofriendchosed from './Components/Nofriendchosed';
import Chat from './Chat';
function App() {
  return (
   <div className='flex'>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route exact path='/' element={<Nofriendchosed/>}/>
      <Route exact path ='/chat/:id' element={<Chatside/>}/>
    </Routes>
    
    </BrowserRouter>
   
   </div>
  );
}

export default App;
