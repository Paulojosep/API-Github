import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Github API</h1>
        <div className="home-text">
          <p>Pesquise um usuario do Github</p>
        </div>
        <Link to="/search">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
