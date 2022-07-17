import './App.css';
import Chatside from './Components/Chatside';
import Topbar from './Components/Topbar';

function App() {
  return (
   <div className='flex'>
    <Topbar/>
    <Chatside/>
   </div>
  );
}

export default App;
