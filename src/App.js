import './App.css';
import Chatside from './Components/Chatside';
import Topbar from './Components/Topbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nofriendchosed from './Components/Nofriendchosed';
import Login from './Components/Login';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  const [isloggedin, setisloggedin] = useState(false);
  
  
  useEffect(() => {
    const token=window.localStorage.getItem('token')
    const username=window.localStorage.getItem('username')
   axios.post('http://localhost:3001/check',{token,username}).then(response=>{
      setisloggedin(response.data.state)
   })
  }, []);
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
