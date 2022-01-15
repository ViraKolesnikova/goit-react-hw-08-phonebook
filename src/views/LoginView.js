import { useState } from 'react';

import s from '../components/Form/Form.module.css';

export default function RegisterView() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <h1>Log in</h1>
      <form className={s.form}>        
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="mail">E-mail</label>
          <input className={s.input} type="mail" name="mail" id="mail" value={mail} placeholder="Your e-mail" required />
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="password">Password</label>
          <input className={s.input}
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            required
          />
        </div>
        <button className={s.formBtn} type="submit">Log in</button>
      </form>
    </>
  );
}