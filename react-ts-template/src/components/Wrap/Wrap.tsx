import { Virtuoso } from "react-virtuoso";
import DataCard from "./../DataCard/DataCard";
import classes from "./Wrap.module.css";
import Loader from "../Loader/Loader";

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

const Wrap = ({ data, favorites, setFavorites, onLoadMore }: { data: DataItem[], favorites: any, setFavorites: any, onLoadMore: () => void }, isLoading: boolean) => {
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

  const components = {
    Footer: () => (isLoading ? <Loader /> : null)
  };
  
  return (
    <div className={classes.box}>
      <Virtuoso
        useWindowScroll={true}
        totalCount={data.length}
        itemContent={index => (
          <DataCard
            id={data[index].id}
            name={data[index].name ? data[index].name : data[index].title}
            image={data[index].thumbnail?.path ? `${data[index].thumbnail.path}.${data[index].thumbnail.extension}` : `${data[index].image}`}
            description={data[index].description}
            type={data[index].type ? data[index].type : (data[index].name ? "characters" : "comics")}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav: { id: number }) => fav.id === data[index].id)}
          />
        )}
        components={components}
        endReached={onLoadMore}
      />
    </div>
  );
};

export default Wrap;
