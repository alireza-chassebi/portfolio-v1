import React from 'react';
import { Container } from '../../components/Container';
import './home.css';

const Home = () => {
  return (
    <Container>
      <div className="Home">
        <p>
          Hello!
          <span id="wave" role="img" aria-label="hi">
            👋🏾
          </span>
        </p>
        <p>
          I'm <span>Alireza Chassebi</span> a design-minded, customer-focused
          software ethusiast focused on building beautiful interfaces &
          experiences
          <span role="img" aria-label="computer">
            👨🏾‍💻
          </span>
          .
        </p>
      </div>
    </Container>
  );
};

export default Home;
