import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterPage } from './components/pages/RegisterPage/RegisterPage.jsx';
import { LoginPage } from './components/pages/LoginPage/LoginPage.jsx'
import './AppStyles.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/cadastro' element={<RegisterPage />}/>
        {/* <Route path='/habitos' element={<HabitsPage />}/> */}
        {/* <Route path='/hoje' element={<TodayPage />}/> */}
        {/* <Route path='/historico' element={<HistoryPage />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
