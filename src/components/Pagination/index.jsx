import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export function Pagination({ onPageChange, pageLimit, pageCount }) {
  return (
    <>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(evt) => onPageChange(evt.selected + 1)}
        pageRangeDisplayed={pageLimit}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
