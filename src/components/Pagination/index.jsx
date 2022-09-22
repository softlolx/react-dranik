import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export function Pagination({ ...props }) {
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * 4) % items.length;
  //   console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  //   setItemOffset(newOffset);
  // };

  return (
    <>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => console.log(e)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}