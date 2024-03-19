import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Navbar from './pages/navbar';
import './App.css';
import Companies from './pages/companies';
import Interview from './pages/interview';
import JobVacancy from './pages/jobvacant';
import AboutUs from './pages/aboutus';
import Sidebar from './pages/sidebar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './pages/Redux/Store';
import Terms from './pages/terms';
import PolicyPage from './pages/policy';
import FAQ from './pages/faq';
import Feedback from './pages/feedback';
import ContactUsPage from './pages/contactus';
import Joblisting from './pages/recruiting';
import Dashboard from './pages/dashboard';
import PostJobForm from './pages/postjob';
import Updatejob from './pages/updatejob';

function App() {
  return (
    
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/companies' element={<Companies/>}/>
    <Route path='/interview' element={<Interview/>}/>
    <Route path='/jobvacant' element={<JobVacancy/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/sidebar' element={<Sidebar/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/policy' element={<PolicyPage/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/contactus' element={<ContactUsPage/>}/>
    <Route path='/recruiting' element={<Joblisting/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/postjob' element={<PostJobForm/>}/>
    <Route path='/updatejob' element={<Updatejob/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
   
  );
}
export default App;