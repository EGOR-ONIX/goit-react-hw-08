import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

import css from "./SearchBox.module.css";

function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Find contacts by name"
      value={filterValue}
      onChange={(event) => dispatch(changeFilter(event.target.value))}
    />
  );
}

export default SearchBox;
