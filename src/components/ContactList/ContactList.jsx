import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/slice.js";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contact-list"]}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css["contact-item"]}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
