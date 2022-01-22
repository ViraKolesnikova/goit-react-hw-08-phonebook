import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

import MainAppBar from './components/MainAppBar';
import RequireAuth from './components/RequireAuth';
import PublicRoute from './components/PublicRoute';
import { ovalWrapper } from './components/Loader/Loader';
import { getUserStatus } from './redux/auth/authSelector';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const isLoggedIn = useSelector(getUserStatus);
  return (
    <>
      <Suspense
        fallback={
          <Oval
            arialLabel="loading-indicator"
            height="100"
            width="100"
            color="rgb(197 205 208 )"
            wrapperStyle={ovalWrapper}
          />
        }
      >
        <Routes>
          <Route path="/" element={<MainAppBar />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <RequireAuth redirectTo="/">
                  <ContactsView />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<MainAppBar />}>
            <Route
              path="*"
              element={isLoggedIn ? <ContactsView /> : <HomeView />}
            />
          </Route>
        </Routes>
      </Suspense>

      <Toaster />
    </>
  );
}
