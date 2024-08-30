import styles from "./search.module.css";

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search by location"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default Search;
