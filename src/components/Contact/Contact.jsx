import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <ul className={css.information}>
        <li>
          <FaUser className={css.icon} />
          <span>{name}</span>
        </li>
        <li>
          <FaPhoneAlt className={css.icon} />
          <span>{number}</span>
        </li>
      </ul>

      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
