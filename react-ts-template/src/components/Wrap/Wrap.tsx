import DataCard from "./../DataCard/DataCard"
import classes from './Wrap.module.css'

interface DataItem {
  id: number;
  name: string;
  img: string;
  description: string;
  baseLink: string;
}

const Wrap = ({ data }: { data: DataItem[] }) => {
  return (
    <div className={classes.box}>
      {data.map((item: DataItem) => (
        <DataCard
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          description={item.description}
          baseLink={item.baseLink}
        />
      ))}
    </div>
  );
};

export default Wrap;