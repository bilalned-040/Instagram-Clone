import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/create'>
        <CreatePost />
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
