import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfoContext from './components/Contexts/UserInfoContext.jsx';
import LoginPage from './components/pages/LoginPage/LoginPage.jsx';
import RegisterPage from './components/pages/RegisterPage/RegisterPage.jsx';
import TodayPage from './components/pages/TodayPage/TodayPage.jsx';
import './AppStyles.js';

function App() {
  const [userInfoContext, setUserInfoContext] = useState({})
  return (
    <BrowserRouter>
      <UserInfoContext.Provider value={{userInfoContext, setUserInfoContext}}>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/cadastro' element={<RegisterPage/>}/>
            {/* <Route path='/habitos' element={<HabitsPage />}/> */}
            <Route path='/hoje' element={<TodayPage />}/>
            {/* <Route path='/historico' element={<HistoryPage />}/> */}
          </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>
  );
}

export default App;