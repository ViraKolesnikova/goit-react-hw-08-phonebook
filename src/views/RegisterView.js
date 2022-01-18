import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useRegisterUserMutation } from '../redux/auth/auth-reducer';
import s from '../components/Form/Form.module.css';
import Container from '../components/Container';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser, { isSuccess }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { name, email: mail, password };
    registerUser(newUser);
    
    reset();    
  };

  const reset = () => {
    setName('');
    setMail ('');
    setPassword ('');
  }

  return (
    <>
    <Container>
      <h1>Register form</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <p>Create your account. It takes a minute.</p>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Your first and last name"
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
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
            minLength="7"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className={s.formBtn} type="submit">
          Register now
        </button>
        <p>
          Already have an account?<Link to="/login">Log in</Link>
        </p>
      </form>
    </Container>

    { isSuccess && navigate('/contacts') }
  </>
  );
}
