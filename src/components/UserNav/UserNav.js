import { useSelector } from "react-redux";

import { getUserName } from "../../redux/auth/authSelector";
import {useLogoutUserMutation} from '../../redux/auth/auth-reducer'
import s from './UserNav.module.css'

export default function UserNav() {
  const userName = useSelector(getUserName);
  const [logoutUser] = useLogoutUserMutation();

  return (
    <>
      <p className={s.userMail}>Hello, {userName}!</p>
      <button type='button' className={s.logOutBtn} onClick={()=>logoutUser()}>Log out</button>
    </>
  )
}