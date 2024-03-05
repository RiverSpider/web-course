import { characters } from '../../assets/styles/characters';
import { comics } from '../../assets/styles/comics';
import classes from './InfoPage.module.css'
import { useNavigate, useParams } from "react-router-dom";

interface DataItem {
    baseLink: any;
    id: number;
    name: string;
    description: string;
    img: string;
    comics?: Array<String>;
    characters?: Array<String>;
  }

  const InfoPage = ({ data }: { data: DataItem[] }) => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const character = data.find((item) => item.id === parseInt(id));
  
    return (
        <div>
          {character && (
            <>
              <img className={classes.img} src={character.img ? "." + character.img : "../src/assets/images/Comics/DefaultComics.jpg"} alt="" />
              <div className={classes.box}>
              <div className={classes.horizontalContainer}>
                <div className={classes.verticalContainer}>
                  <div className={classes.name}>{character.name}</div>
                  <div className={classes.description}>{character.description ? character.description : 'No description provided'}</div>
                </div>
                <div className={classes.verticalContainer}>
                  <div className={classes.header}>{window.location.pathname.includes('/characters') ? 'Comics' : 'Characters'}</div>
                  <div>
                    {(character.comics || character.characters).map((item, index) => (
                        <div key={index} className={classes.apperance} onClick={() => navigate(`${character.baseLink === "/characters" ? "/comics" : "/characters" }/${character.baseLink === "/characters" ? comics.find(i => i.name === item)?.id : characters.find(i => i.name === item)?.id}`)}>{item}</div>
                    ))}
                </div>
                </div>
                </div>
              </div>
            </>
          )}
        </div>
      )
  }

export default InfoPage