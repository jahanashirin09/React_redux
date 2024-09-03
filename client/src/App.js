import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Settings from './pages/Settings';
import Usage from './pages/Usage';
import Users from './pages/Users';
import Headers from './components/Header';
import Details from './pages/Details';
import NotFound from './pages/PageNotFound';
import Marks from './pages/Marks'
import Sports from './pages/Sports'
import Remarks from './pages/Remarks'




function App() {
  return (
    <BrowserRouter>
       <div>
       <Headers/>
       </div>
       <div className='page'>
       <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="usage" element={<Usage/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="details/:userId/" element={<Details/>}>
        <Route index path=""element={<Marks/>}/>
                <Route path="sports" element={<Sports/>}/>
                <Route path="Remarks" element={<Remarks/>}/>
           </Route>
        
          
        <Route path="*" element={<NotFound/>}/>
     
        
       </Routes>
       </div>

    </BrowserRouter>

  );
}

export default App;
