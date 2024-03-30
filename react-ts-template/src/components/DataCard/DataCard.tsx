import { Link } from 'react-router-dom'
import classes from './DataCard.module.css'
import { useState, useEffect } from 'react';
import useLocalStorage from '../../stores/localStore';

interface DataCardProps {
    id: number;
    name: string;
    image: string;
    description: string;
}

const DataCard = ({ id, name, image, description }: DataCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === id));
  }, [id, favorites]);

  const toggleFavorite = () => {
    const favoriteObject = {
      id: id,
      name: name,
      image: image,
      description: description
    };

    if (favorites.some(fav => fav.id === id)) {
      const newFavorites = favorites.filter(fav => fav.id !== id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, favoriteObject]);
    }
  };

  const favoriteIcon = (
    <div className={classes.favoriteIcon} onClick={toggleFavorite} onMouseEnter={() => setIsFavorite(!isFavorite)} onMouseLeave={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? <img src="./src/assets/images/Favourites/heart_red.svg" /> : <img src="./src/assets/images/Favourites/heart_white.svg" />}
    </div>
  );

  return (
    <div className={classes.inner}>
      <Link to={`/${id}`}>
        <img className={classes.img} src={image ? image : "./src/assets/images/Comics/DefaultComics.jpg"} alt="" />
        <div className={classes.title}>{name}</div>
      </Link>
      <div className={classes.description}>{description ? description : 'No description provided'}</div>
      {favoriteIcon}
    </div>
  );
};

export default DataCard;
