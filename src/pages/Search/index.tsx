import axios from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import UserTags from 'components/UserTags';
import { useState } from 'react';
import { User } from 'types/User';
import SearchLoader from './SearchLoader';
import './styles.css';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userResponse, setUserResponse] = useState<User>();
  const [userName, setUserName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (userName !== '') {
      axios
        .get(`https://api.github.com/users/${userName}`)
        .then((response) => {
          setUserResponse(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
          setUserResponse(undefined);
          alert('Usuario não econtrado');
        })
        .finally(() => {
          setIsLoading(false);
          setUserName('');
        });
    } else {
      alert('Digite um usuario existente!');
    }
  };

  return (
    <div className="search-container">
      <section className="seach-user">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" className="seach-title">
            Encontre um perfil Github
          </label>
          <input
            value={userName}
            type="text"
            id="search"
            placeholder="Usuário Github"
            onChange={(e) => setUserName(e.target.value)}
          />
          <ButtonIcon text="Econtrar" />
        </form>
      </section>

      {userResponse && (
        <section className="result-area">
          <div className="info">
            {isLoading ? (
              <SearchLoader />
            ) : (
              <>
                <div className="img-user">
                  <img
                    src={userResponse.avatar_url}
                    alt="Foto do Perfil do GitHub"
                  />
                </div>
                <div className="about-user">
                  <div className="user-info">
                    <h2 className="user-info-title">Informações</h2>
                    <UserTags
                      fieldName="Perfil: "
                      userData={userResponse?.url}
                    />
                    <UserTags
                      fieldName="Seguidores: "
                      userData={userResponse.followers}
                    />
                    <UserTags
                      fieldName="Localidade: "
                      userData={userResponse.location}
                    />
                    <UserTags fieldName="Nome: " userData={userResponse.name} />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
