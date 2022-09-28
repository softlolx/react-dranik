import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export function Pagination({ onPageChange }) {
  return (
    <>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(evt) => onPageChange(evt.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
