import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
