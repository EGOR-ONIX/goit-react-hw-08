import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps.js";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <h2 className={css.subtitle}>New contact</h2>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>

      {!isLoading && error === null && contacts.length === 0 ? (
        <p className={css["no-contacts"]}>The contact list is empty!</p>
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
      {isLoading && <Loader />}
      {error !== null && (
        <p className={css["error"]}>{error}. Please, try again later!</p>
      )}
    </>
  );
}

export default App;
