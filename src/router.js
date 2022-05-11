
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'

const Routing = () => {
    return (
        <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    );
}

export default Routing;