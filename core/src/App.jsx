import {Routes, Route} from 'react-router-dom';

import Home from './pages/';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}
