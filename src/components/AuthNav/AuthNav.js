import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        style={{ marginRight: '20px' }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
    </>
  );
}
