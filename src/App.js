
import './App.css';
import {
  Router,
  Route,
  Link,
  Switch,
  BrowserRouter 
} from "react-router-dom";

import { HomeTemplates } from './templates/HomeTemplate/HomeTemplates';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail/Detail';
import { CheckOutTemplate } from './templates/CheckOutTemplate/CheckOutTemplate';
import CheckOut from './pages/CheckOut/CheckOut';
import {history} from './util/history'
import Loading from './components/Loading/Loading';
import ModalConfirm from './components/ModalConfirm/ModalConfirm';
import Test from './components/Test/Test';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AddFilm from './pages/Admin/AddFilm/AddFilm';
import EditFilm from './pages/Admin/EditFilm/EditFilm';
import ShowTime from './pages/Admin/ShowTime/ShowTime.';
import Usermanagerment from './pages/Admin/UserManagerment/Usermanagerment';
import EditUser from './pages/Admin/UserManagerment/EditUser/EditUser';
import AddUser from './pages/Admin/UserManagerment/AddUser/AddUser';
import UserInfor from './templates/UserInforTemplate/UserInfor/UserInfor';
import { UserInforTemplate } from './templates/UserInforTemplate/UserInforTemplate';
import DatVeInfor from './templates/UserInforTemplate/DatVeInfor/DatVeInfor';



function App() {
 
  return (
      
    <Router history={history}>
      {/* <Test/> */}
      <Loading/>
      <ModalConfirm/>
      <Switch>
        <HomeTemplates path="/" exact Component={Home} />
        <HomeTemplates path="/home" exact Component={Home} />
        <HomeTemplates path="/detail/:id" exact Component={Detail} />
        <HomeTemplates path="/contact" exact Component={Contact} />
        <HomeTemplates path="/news" exact Component={News} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <UserInforTemplate  path = "/userInfor/profile" exact Component = {UserInfor}/>
        <UserInforTemplate  path = "/userInfor/historycheckout" exact Component = {DatVeInfor}/>
        <CheckOutTemplate path="/checkout/:id" exact Component={CheckOut} />
        <AdminTemplate path = "/admin" exact Component = {Dashboard}/>
        <AdminTemplate path = "/admin/addfilm" exact Component = {AddFilm}/>
        <AdminTemplate path = "/admin/editfilm/:id" exact Component = {EditFilm}/>
        <AdminTemplate path = "/admin/showtime/:id" exact Component = {ShowTime}/>
        <AdminTemplate path = "/admin/usermanager" exact Component = {Usermanagerment}/>
        <AdminTemplate path = "/admin/usermanager/edituser/:id" exact Component = {EditUser}/>
        <AdminTemplate path = "/admin/usermanager/adduser/" exact Component = {AddUser}/>
      </Switch>
      
      </Router>
    
  );
}

export default App;
