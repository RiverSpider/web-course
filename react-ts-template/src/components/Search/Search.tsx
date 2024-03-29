import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Search.module.css';
import Divider from '../Divider/Divider';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setDebouncedQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery === debouncedQuery && searchQuery !== '') {
        const path = window.location.pathname.includes('/characters') ? '/characters' : '/comics';
        navigate(`${path}/?search=${searchQuery}`);
        window.location.reload();
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, debouncedQuery, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery !== '') {
      const path = window.location.pathname.includes('/characters') ? '/characters' : '/comics';
      navigate(`${path}/?search=${searchQuery}`);
      window.location.reload();
    }
  };

  return (
    <>
      <form className={classes.search_form} onSubmit={handleSubmit}>
        <input
          type='text'
          className={classes.form_control}
          placeholder={`Search for ${window.location.pathname.includes('/characters') ? 'characters by Name' : 'comics by Title'}`}
          onChange={handleChange} />
        <button className={classes.button} type='submit'>SEARCH</button>
      </form>
      <Divider /></>
    
  );
};

export default SearchForm;
