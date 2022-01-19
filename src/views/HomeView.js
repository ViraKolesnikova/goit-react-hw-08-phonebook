import { Link } from 'react-router-dom';

import Container from '../components/Container';

export default function HomeView() {
  return (
    <Container>
      <h3>
        To enter PHONEBOOK you should <Link to="login">Log in</Link> or <Link to="register">Register</Link>
      </h3>
    </Container>
  );
}
