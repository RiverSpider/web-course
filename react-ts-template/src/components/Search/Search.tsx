import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Search.module.css';
import { characters } from '../../assets/styles/characters';
import { comics } from '../../assets/styles/comics';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const path = window.location.pathname.includes('/characters') ? '/characters' : '/comics';
    navigate(`${path}/search/${searchQuery}`);
  };

  return (
    <><div className={classes.box}>
      <div className={classes.page_name}>{window.location.pathname.includes('/characters') ? 'Characters' : 'Comics'}</div>
      <div className={classes.cards_count}>
        ({window.location.pathname.includes("/characters")
          ? characters.length
          : comics.length})
      </div>
    </div><form className={classes.search_form} onSubmit={handleSubmit}>
        <input
          type='text'
          className={classes.form_control}
          placeholder={`Search for ${window.location.pathname.includes('/characters') ? 'characters' : 'comics'} by Name`}
          onChange={handleChange} />
        <button className={classes.button} type='submit'>SEARCH</button>
      </form>
      <div className={classes.divider}></div></>
    
  );
};

export default SearchForm;
