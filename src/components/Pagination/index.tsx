import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

import { useWhyDidYouUpdate } from 'ahooks';

type PaginationProps = {
  onPageChange: Function;
  pageLimit: number;
  pageCount: number;
};

export function Pagination({ onPageChange, pageLimit, pageCount }: PaginationProps) {
  useWhyDidYouUpdate('Pagination', { onPageChange, pageLimit, pageCount });
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
