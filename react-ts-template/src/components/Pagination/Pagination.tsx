import { useState } from 'react';
import classes from './Pagination.module.css'
import Divider from '../Divider/Divider';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  setIsLoading: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange, setIsLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 7;

  const handleClick = (page: number) => {
    if (!setIsLoading && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const renderPaginationButtons = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
          <button key={i} onClick={() => handleClick(i)} className={currentPage === i ? `${classes.button} ${classes.active}` : classes.button}>
            {i}
          </button>
      );
    }

    return pages;
  };

  return (
    <><Divider /><div className={classes.pagination}>
      {currentPage > 1 && (
        <button className={classes.button} onClick={() => handleClick(1)}>&lt;&lt;</button>
      )}
      {currentPage > 1 && (
        <button className={classes.button} onClick={() => handleClick(currentPage - 1)}>&lt;</button>
      )}
      {renderPaginationButtons()}
      {currentPage < totalPages && (
        <button className={classes.button} onClick={() => handleClick(currentPage + 1)}>&gt;</button>
      )}
      {currentPage < totalPages && (
        <button className={classes.button} onClick={() => handleClick(totalPages)}>&gt;&gt;</button>
      )}
    </div></>
  );
};

export default Pagination;
