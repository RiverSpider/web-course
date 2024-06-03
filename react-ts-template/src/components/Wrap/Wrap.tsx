import { VirtuosoGrid } from "react-virtuoso";
import DataCard from "./../DataCard/DataCard";
import classes from "./Wrap.module.css";
import { useTranslation } from "react-i18next";

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

const Wrap = ({ data, favorites, setFavorites, onLoadMore }: { data: DataItem[], favorites: any, setFavorites: any, onLoadMore: () => void, isLoading: boolean, total: number }) => {
  const { t } = useTranslation();
  if (data.length === 0) {
    return <div className={classes.box}><div className={classes.centeredMessage}>{t('no_results')}</div></div>;
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
    <VirtuosoGrid
      useWindowScroll={true}
      totalCount={data.length}
      listClassName={classes.box}
      itemContent={index => (
        <>
        <DataCard
          id={data[index].id}
          name={data[index].name ? data[index].name : data[index].title}
          image={data[index].thumbnail?.path ? `${data[index].thumbnail.path}.${data[index].thumbnail.extension}` : `${data[index].image}`}
          description={data[index].description}
          type={data[index].type ? data[index].type : (data[index].name ? "characters" : "comics")}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav: { id: number }) => fav.id === data[index].id)}
        />
        </>
      )}
      endReached={onLoadMore}
    /> 
  );
};

export default Wrap;
