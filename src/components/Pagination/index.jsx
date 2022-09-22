import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export function Pagination({ onPageChange }) {
  return (
    <>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onPageChange(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
