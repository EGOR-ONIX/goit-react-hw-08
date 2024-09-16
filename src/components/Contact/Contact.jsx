import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import { deleteContact } from "../../redux/contacts/operations.js";

import ModalDeleteContact from "../ModalDeleteContact/ModalDeleteContact.jsx";

import css from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then((contact) => {
        toast.success(`Contact "${contact.name}" deleted successfully!`);
      });
  };

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

      <button className={css.btn} type="button" onClick={toggleModal}>
        Delete
      </button>
      {isOpenModal && <ModalDeleteContact deleteContact={handleDelete} toggleModal={toggleModal} />}
    </>
  );
}

export default Contact;
