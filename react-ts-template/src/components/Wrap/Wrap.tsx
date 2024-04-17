import useLocalStorage from "../../stores/localStore";
import DataCard from "./../DataCard/DataCard";
import classes from "./Wrap.module.css";

interface DataItem {
  thumbnail: {
  path?: string;
  extension?: string;
  }
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  type: string
}

const Wrap = ({ data, favorites, setFavorites }: { data: DataItem[], favorites: any, setFavorites: any }) => {
  if (data.length === 0) {
    return <div className={classes.box}><div className={classes.centeredMessage}>No results</div></div>;
  }

  const toggleFavorite = (id: number) => {
    const isCurrentlyFavorited = favorites.some((fav: { id: number }) => fav.id === id);

    if (isCurrentlyFavorited) {
      const newFavorites = favorites.filter((fav: { id: number }) => fav.id !== id);
      setFavorites(newFavorites);
    } else {
      const foundItem = data.find((item) => item.id === id);

      if (foundItem) {
        const favoriteObject = { 
          id: foundItem.id, 
          name: foundItem.name ? foundItem.name : foundItem.title, 
          image: foundItem.thumbnail?.path ? `${foundItem.thumbnail.path}.${foundItem.thumbnail.extension}` : `${foundItem.image}`, 
          description: foundItem.description, 
          type: foundItem.type ? foundItem.type : (foundItem.name ? "characters" : "comics") 
        };
        setFavorites([...favorites, favoriteObject]);
      }
    }
  };

  return (
    <div className={classes.box}>
      {data.map((item) => (
        <DataCard
          key={item.id}
          id={item.id}
          name={item.name ? item.name : item.title}
          image={item.thumbnail?.path ? `${item.thumbnail.path}.${item.thumbnail.extension}` : `${item.image}`}
          description={item.description}
          type={item.type ? item.type : (item.name ? "characters" : "comics")}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav: { id: number }) => fav.id === item.id)}
        />
      ))}
    </div>
  );
};

export default Wrap;
