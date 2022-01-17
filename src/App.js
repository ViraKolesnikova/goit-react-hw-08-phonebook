import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { useFetchCurrentUserQuery } from './redux/auth/auth-reducer';
import { getToken, getUserStatus } from './redux/auth/authSelector';
import MainAppBar from './components/AppBar/AppBar';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';


export default function App() {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getUserStatus);
  const { data, error } = useFetchCurrentUserQuery(token, {skip: token ===null || isLoggedIn});
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainAppBar />} >
          <Route index element={<RegisterView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView/>}/>
        </Route>
      </Routes>
      

       <Toaster />
    </>
  );
}
