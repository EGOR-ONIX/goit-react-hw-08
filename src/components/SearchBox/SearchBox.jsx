import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import { selectNameFilter } from "../../redux/filters/selectors.js";

import css from "./SearchBox.module.css";

function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const searchContact = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Find contacts by name or number"
      value={filterValue}
      onChange={searchContact}
    />
  );
}

export default SearchBox;
