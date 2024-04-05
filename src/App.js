import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Layout/Navbar'
// import Home from './Components/Pages/Home/Home';
import Main from './MainPage/Main';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';

import Navbar from './Layout/Navbar';
import Home from './Components/Pages/Home/Home';
// import { useParams } from 'react-router-dom';
import User from './UserProfile/User';

function App() {
 
  // let {id} = useParams



  return (
   <>
  
    <Routes>
      <Route path='/'element={<Main/>}/>
       <Route path = '/navbar/' element={<Navbar/>}/>
       <Route path='userProfile/' element = {<User />}/>
       </Routes>

    <Home/>
  
   </>
  );
}

export default App;



// let value1  = "kunal";
// let value2  = prompt("enter value")
// console.log(value1.concat(value2))


