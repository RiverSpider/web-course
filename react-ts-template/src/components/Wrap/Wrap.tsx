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

const Wrap = ({ data }: { data: DataItem[] }) => {
  if (data.length === 0) {
    return <div className={classes.box}><div className={classes.centeredMessage}>No results</div></div>;
  }

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
        />
      ))}
    </div>
  );
};

export default Wrap;
