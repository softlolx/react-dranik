import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  onPageChange: Function;
  pageLimit: number;
  pageCount: number;
};

export function Pagination({ onPageChange, pageLimit, pageCount }: PaginationProps) {
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
      />
    </>
  );
}
