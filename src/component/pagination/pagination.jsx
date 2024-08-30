import styles from "./pagination.module.css";
const Pagination = ({
  hospitalsPerPage,
  totalHospitals,
  paginate,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalHospitals / hospitalsPerPage);

  return (
    <nav>
      <ul className={styles.pagination}>
        {/* Previous button */}
        <li className={currentPage === 1 ? "disabled" : ""}>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Next button */}
        <li className={currentPage === totalPages ? "disabled" : ""}>
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
