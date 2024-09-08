import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice.js";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contact-list"]}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css["contact-item"]}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={(contactId) => dispatch(deleteContact(contactId))}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
