import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/login';
import MainComponent from './component/MainComponent';
import SignUp from './component/SignUp';
import Payment from './component/Payment';
import MainPage from './component/MainPage';
import Paymentstatus from './component/paymentstatus';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<MainComponent />}></Route>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/mainpage' element={<MainPage />}></Route>
          <Route path='/paymentstatus' element={<Paymentstatus />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
