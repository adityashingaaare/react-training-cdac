import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import style from './components/external.module.css';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import Multimedia from './components/Multimedia';
import ToggleImage from './components/ToggleImage';
import UserForm from './UserForm';
import PageNotFound from './components/PageNotFound';
import {Card,Button} from 'react-bootstrap';
import Nav from './components/Nav';
import FavColor from './components/FavColor';
import UseStateDemo from './components/UseStateDemo'
import DashBoard from './CRUD/DashBoard';
import Add from './CRUD/Add';
import Edit from './CRUD/Edit'

function App() {
  return (
    <div className="App">
      <h1 className='myHead'>Vadapav</h1>
      <BrowserRouter>
      <div>
      <Card className="text-center container border-primary">
      <Card.Header className='border-primary'>
        <Nav />
      </Card.Header >
      <Card.Body>
      <Routes>
          <Route path='' element={<Multimedia/>}  />
          <Route path='toggleimg' element={<ToggleImage />} />
           {/* parameterized routing */}
          <Route path='userform/' element={<UserForm />} />
          <Route path='favcolor' element={<FavColor  />} />
          <Route path='toggleimg' element={<ToggleImage />} />
          <Route path='multimedia' element={<Multimedia/>}  />
          <Route path='usestate' element={<UseStateDemo />} />
          <Route path='dashboard'element={<DashBoard />} />
                <Route path='add' element={<Add />} />
                <Route path='/edit/:id' element={<Edit />} />
          

          
          {/* wild card routing */}
          <Route path='*' element={<PageNotFound />} />
         
        </Routes>
      </Card.Body>
      <Card.Footer className="text-muted border-primary mb-2" style={{color:'red'}}>This app is designed by <strong>Vadapav</strong></Card.Footer>
    </Card>
    </div>
      
       
      </BrowserRouter>
    </div>
  );
}

export default App;
