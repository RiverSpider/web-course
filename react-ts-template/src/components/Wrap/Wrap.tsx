import DataCard from "./../DataCard/DataCard";
import classes from "./Wrap.module.css";

interface DataItem {
  thumbnail: {
  path: string;
  extension: string;
  }
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}

const Wrap = ({ data }: { data: DataItem[] }) => {
  return (
    <div className={classes.box}>
      {data.map((item: DataItem) => (
        <DataCard
          key={item.id}
          id={item.id}
          name={item.name ? item.name: item.title}
          image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Wrap;
