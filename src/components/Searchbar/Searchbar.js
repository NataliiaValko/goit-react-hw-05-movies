import PropTypes from "prop-types";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    !query && toast.error("Please, enter your request!");
    query && onSubmit(query);
    query && setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <input
        className={s.searchForm__input}
        name="queryToSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the query to find the film"
        onChange={handleQueryChange}
        value={query}
      />
      <button type="submit" className={s.searchForm__button}>
        <BsSearch className={s.icon} />
      </button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
