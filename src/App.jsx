import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import UserInfoContext from './components/Contexts/UserInfoContext.jsx';
import SelectedDaysContext from './components/Contexts/SelectedDaysContext.jsx';
import LoginPage from './components/pages/LoginPage/LoginPage.jsx';
import RegisterPage from './components/pages/RegisterPage/RegisterPage.jsx';
import TodayPage from './components/pages/TodayPage/TodayPage.jsx';
import HabitsPage from './components/pages/HabitsPage/HabitsPage.jsx';
import HistoryPage from './components/pages/HistoryPage/HistoryPage.jsx';
import ProgressBarContext from './components/Contexts/ProgressBarContext.jsx';

function App() {
  const [userInfoContext, setUserInfoContext] = useState({})
  const [selectedDaysArray, setSelectedDaysArray] = useState([])
  const [progressBar, setProgressBar] = useState(0)
  // useEffect(() => {
  //   const user = localStorage.getItem("user")
  //   console.log(user, user !== {})
  //   if(user !== {}) {
  //     setUserInfoContext(user)
  //   }
  // }, [userInfoContext])
  
  return (
    <BrowserRouter>
        <UserInfoContext.Provider value={{userInfoContext, setUserInfoContext}}>
          <ProgressBarContext.Provider value={{progressBar, setProgressBar}}>
            <SelectedDaysContext.Provider value={{selectedDaysArray, setSelectedDaysArray}}>
                <Routes>
                  <Route path='/' element={<LoginPage />}/>
                  <Route path='/cadastro' element={<RegisterPage/>}/>
                  <Route path='/habitos' element={<HabitsPage />}/>
                  <Route path='/hoje' element={<TodayPage />}/>
                  <Route path='/historico' element={<HistoryPage />}/>
                </Routes>
            </SelectedDaysContext.Provider>
          </ProgressBarContext.Provider>
        </UserInfoContext.Provider>
    </BrowserRouter>
  );
}

export default App;