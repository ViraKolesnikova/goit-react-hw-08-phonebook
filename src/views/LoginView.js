import { useState } from 'react';

import { useLoginUserMutation } from '../redux/auth/auth-reducer';
import s from '../components/Form/Form.module.css';
import Container from '../components/Container';

export default function RegisterView() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { data }] = useLoginUserMutation();
  
  const handleSubmit = event => {
    event.preventDefault();
    const userData = { email: mail, password };
    loginUser(userData);
    reset();
  };

  const reset = () => {
    setMail('');
    setPassword('');
  };

  return (
    <>
      <Container>
        <h1>Log in</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="mail">
              E-mail
            </label>
            <input
              className={s.input}
              type="mail"
              name="mail"
              id="mail"
              value={mail}
              placeholder="Your e-mail"
              required
              onChange={e => setMail(e.target.value)}
            />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="password">
              Password
            </label>
            <input
              className={s.input}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className={s.formBtn} type="submit">
            Log in
          </button>
        </form>
      </Container>      
    </>
  );
}
