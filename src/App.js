import './App.css';
import Chatside from './Components/Chatside';
import Topbar from './Components/Topbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nofriendchosed from './Components/Nofriendchosed';
import Login from './Components/Login';
import {useState} from 'react'
function App() {
  const [isloggedin, setisloggedin] = useState(false);
  return (
   <>
   

  {!isloggedin?<Login/>:<>
  <div className='flex'>
  <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route exact path='/' element={<Nofriendchosed/>}/>
      <Route exact path ='/chat/:id' element={<Chatside/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  </>}

   </>
  );
}

export default App;
