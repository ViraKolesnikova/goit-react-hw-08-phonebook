import { useSelector } from "react-redux";

import { getUserMail } from "../../redux/auth/authSelector";
import {useLogoutUserMutation} from '../../redux/auth/auth-reducer'
import s from './UserNav.module.css'

export default function UserNav() {
  const userMail = useSelector(getUserMail);
  const [logoutUser, {}] = useLogoutUserMutation();

  return (
    <>
      <p className={s.userMail}>{userMail}</p>
      <button type='button' className={s.logOutBtn} onClick={()=>logoutUser()}>Log out</button>
    </>
  )
}