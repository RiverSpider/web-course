import { Link } from 'react-router-dom'
import classes from './DataCard.module.css'

interface DataCardProps {
  id: number
  name: string
  image: string
  description: string
  baseLink: string
}

const DataCard = ({ id, name, image, description, baseLink }: DataCardProps) => (
    <div className={classes.inner}>
      <Link to={`${baseLink}/${id}`}>
        <img className={classes.img} src={image ? image : "./src/assets/images/Comics/DefaultComics.jpg"} alt="" />
        <div className={classes.title}>{name}</div>
      </Link>
      <div className={classes.description}>
        {description ? description : 'No description provided'}
      </div>
    </div>
)

export default DataCard
