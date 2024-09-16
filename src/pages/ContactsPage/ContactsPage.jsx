import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";

import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import css from "./ContactsPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully!");
      });
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

export default ContactsPage;
