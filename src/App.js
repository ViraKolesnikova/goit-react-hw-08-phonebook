import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

import { useFetchCurrentUserQuery } from './redux/auth/auth-reducer';
import { getToken, getUserStatus } from './redux/auth/authSelector';
import MainAppBar from './components/AppBar/AppBar';
import RequireAuth from './components/RequireAuth';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getUserStatus);
  const { data, error } = useFetchCurrentUserQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return (
    <>
      <Suspense
        fallback={
          <Oval
            arialLabel="loading-indicator"
            radius="17.5"
            height="60"
            width="60"
            color="rgb(197 205 208 )"
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
        </Routes>
      </Suspense>

      <Toaster />
    </>
  );
}
