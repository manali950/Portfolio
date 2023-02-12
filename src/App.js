
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';



import HomeIndex from "./components/home/HomeIndex";
import AdminIndex from './components/admin/AdminIndex';
import { Provider } from 'react-redux';
import store from './store';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminContact from './components/admin/AdminContact';
import HomeVisitingCard from './components/home/HomeVisitingCard';
import AdminProfile from './components/admin/AdminProfile';
import AdminProfileUpdate from './components/admin/common/AdminProfileUpdate';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminAddSocial from './components/admin/AdminAddSocial';
import AdminSocialUpdate from './components/admin/common/AdminSocialUpdate';
import AdminAddSkill from './components/admin/AdminAddSkill';
import AdminSkillUpdate from './components/admin/common/AdminSkillUpdate';
import AdminAddVCCard from './components/admin/AdminAddVCCard';
import AdminCardUpdate from './components/admin/common/AdminCardUpdate';


function App() {

  return (
    <Provider store={store}>
    <ToastContainer position='top-center'/>
      <Router>
        <Route exact path="/home" component={HomeIndex} />
        <Route exact path="/homeVc" component={HomeVisitingCard} />
        <Route exact path="/admin" component={AdminIndex} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        <Route exact path="/adminProfile" component={AdminProfile} />
        <Route exact path="/AdminProfileUpdate/:id" component={AdminProfileUpdate} />
        
        <Route exact path="/adminContact" component={AdminContact} />
        <Route exact path="/adminSocial" component={AdminAddSocial} />
        <Route exact path="/AdminSocialUpdate/:id" component={AdminSocialUpdate} />
        <Route exact path="/adminSkill" component={AdminAddSkill} />
        <Route exact path="/AdminSkillUpdate/:id" component={AdminSkillUpdate} />
        <Route exact path="/adminVcCard" component={AdminAddVCCard} />
        <Route exact path="/AdminCardUpdate/:id" component={AdminCardUpdate} />
        

        

      </Router>
    </Provider>
  );
}

export default App;
