import classes from './InfoPage.module.css'
import { Character, ComicSummary } from '../../api/types/characters';
import { useNavigate } from 'react-router-dom';
import { Comic, CharacterSummary } from '../../api/types/comics';
import { useTranslation } from 'react-i18next';

interface InfoPageProps {
  data: Character | Comic | null;
  type: 'Characters' | 'Comics';
}

const InfoPage = ({ data, type }: InfoPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      {data && (
        <>
          <img className={classes.img} src={(data as Comic).thumbnail.path + '.' + (data as Comic).thumbnail.extension} alt="" />
          <div className={classes.box}>
            <div className={classes.horizontalContainer}>
              <div className={classes.verticalContainer}>
                <div className={classes.name}>{(data as Comic).title || (data as Character).name}</div>
                <div className={classes.description}>{(data as Comic).description ? (data as Comic).description : `${t('default_description')}`}</div>
              </div>
              <div className={classes.verticalContainer}>
                <div className={classes.header}>{type === 'Characters' ? `${t('comics')}` : `${t('characters')}`}</div>
                <div>
                  {(type === 'Characters' ? (data as Character).comics.items : (data as Comic).characters.items).map((item: CharacterSummary | ComicSummary, index: number) => (
                    <div key={index} className={classes.appearance} onClick={() => navigate(`${type === 'Characters' ? '/comics' : '/characters'}/${getCharacterResourceId(item)}`)}>{item.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const getCharacterResourceId = (item: CharacterSummary | ComicSummary): string => {
  if ('resourceURI' in item && item.resourceURI) {
    return item.resourceURI.split('/').pop()!;
  }
  return '';
};

export default InfoPage;
