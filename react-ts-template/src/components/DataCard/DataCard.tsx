import { Link } from 'react-router-dom'
import classes from './DataCard.module.css'
import { useState, useEffect } from 'react';
import useLocalStorage from '../../stores/localStore';

interface DataCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  type: 'characters' | 'comics';
}

const DataCard = ({ id, name, image, description, type }: DataCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((fav: { id: number; }) => fav.id === id));
  }, [id, favorites]);

  const toggleFavorite = () => {
    const isCurrentlyFavorited = favorites.some((fav: { id: number; }) => fav.id === id);
    
    if (isCurrentlyFavorited) {
      const newFavorites = favorites.filter((fav: { id: number; }) => fav.id !== id);
      setFavorites(newFavorites);
    } else {
      const favoriteObject = { id, name, image, description, type };
      setFavorites([...favorites, favoriteObject]);
    }
  };

  const heartImage = isFavorite ? "./src/assets/images/Favourites/heart_red.svg" : "./src/assets/images/Favourites/heart_white.svg";

  return (
    <div className={classes.inner} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`${`/${type}/${id}`}`}>
        <img className={classes.img} src={image ? image : "./src/assets/images/Comics/DefaultComics.jpg"} alt="" />
        <div className={classes.title}>{name}</div>
      </Link>
      <div className={classes.description}>{description ? description : 'No description provided'}</div>
      <div className={classes.favoriteIcon} style={{ display: isHovered ? 'flex' : 'none' }} onClick={toggleFavorite}>
        <img src={heartImage} />
      </div>
    </div>
  );
};

export default DataCard;
