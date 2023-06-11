import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { films, toggleFavorite } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1>Films</h1>
      { films ? films.map((film, index) => (
        <div key={ index }>
          <h2>{ film.title }</h2>
          <img src={ film.image } alt={ film.title } />
          <p>{ film.description }</p>
          <button onClick={ toggleFavorite } id={ film.id }>&#10084;</button>
        </div>
      )) : <span>Loading...</span> }
    </div>
  );
}
