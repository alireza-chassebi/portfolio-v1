import React from 'react';
import { Container } from '../../components/Container';
import './home.css';

const Home = () => {
  return (
    <Container>
      <div className="Home">
        <p>
          Hello!
          <div id="wave">
            <span role="img" aria-label="hi">
              👋🏾
            </span>
          </div>
        </p>
        <p>
          I'm <span>Alireza Chassebi</span> a design-minded, user-focused
          software ethusiast focused on building amazing experiences and on
          continuously improving
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
