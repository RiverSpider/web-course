import { Link } from 'react-router-dom'
import classes from './DataCard.module.css'
import { useState } from 'react';

interface DataCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
  toggleFavorite: (id: number) => void;
  isFavorite: boolean;
}

const DataCard = ({ id, name, image, description, type, toggleFavorite, isFavorite }: DataCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const heartImage = isFavorite ? "./src/assets/images/Favourites/heart_red.svg" : "./src/assets/images/Favourites/heart_white.svg";

  const sendNotification = (title: string, message: string) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'favorite-change',
        title: title,
        message: message
      });
    }
  };

  return (
    <div className={classes.inner} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`${`/${type}/${id}`}`}>
        <img className={classes.img} src={image ? image : "./src/assets/images/Comics/DefaultComics.jpg"}/>
        <div className={classes.title}>{name}</div>
      </Link>
      <div className={classes.description}>{description ? description : "No description provided"}</div>
      <div className={classes.favoriteIcon} style={{ display: isHovered ? "flex" : "none" }} onClick={() => {
        toggleFavorite(id);
        sendNotification('Favorite Changed', `You have ${isFavorite ? 'removed' : 'added'} ${name} to your favorites.`);
      }}>
        <img src={heartImage} />
      </div>
    </div>
  );
};

export default DataCard;
