import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmsContext from './context/FilmsContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, []);

  function toggleUnfavorite({ target }) {
    const filterFaves = favorites.filter((fav) => fav.id !== target.id);
    setFavorites(filterFaves);
  }

  function toggleFavorite({ target }) {
    const fave = films.find((film) => film.id === target.id);
    const verify = favorites.every((fav) => fav.id !== target.id);
    if (verify) {
      setFavorites([...favorites, fave]);
    }
    if (!verify) {
      const filterFaves = favorites.filter((fav) => fav.id !== target.id);
      setFavorites(filterFaves);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
    toggleUnfavorite,
  };

  return (
    <FilmsContext.Provider value={ context }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
