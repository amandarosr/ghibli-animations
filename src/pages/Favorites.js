import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { favorites, toggleUnfavorite } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      { favorites ? favorites.map((fav, index) => (
        <div key={ index }>
          <h2>{ fav.title }</h2>
          <img src={ fav.image } alt={ fav.title } />
          <p>{ fav.description }</p>
          <button onClick={ toggleUnfavorite } id={ fav.id }>&#10006;</button>
        </div>
      )) : null }
    </div>
  );
}
