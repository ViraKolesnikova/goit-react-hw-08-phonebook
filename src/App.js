import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';


import MainAppBar from './components/AppBar/AppBar';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

export default function App() {
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