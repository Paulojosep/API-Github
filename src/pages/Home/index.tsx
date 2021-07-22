import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
          <div className="home-content">
              <h1 className="home-title">
                  Desafio Github API
              </h1>
              <div className="home-text">
                  <p>Bootcamp Spring React - DevSuperior</p>
              </div>
              <ButtonIcon text="Começar" />
          </div>
      </div>
    </>
  );
};

export default Home;
