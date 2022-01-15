import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from '../components/Form/Form.module.css';
import Container from '../components/Container';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <h1>Register form</h1>
      <form className={s.form}>
        <p>Create your account. It takes a minute.</p>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="name">Name</label>
          <input className={s.input}
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Your first and last name"
            required
          />
        </div>
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
        <button className={s.formBtn} type="submit">Register now</button>
      </form>
      <p>Already have an account?<Link to="/login">Log in</Link></p>
    </Container>
  );
}
