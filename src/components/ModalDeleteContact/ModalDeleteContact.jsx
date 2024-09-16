import Modal from "react-modal";

import css from "./ModalDeleteContact.module.css";

Modal.setAppElement("#root");

function ModalDeleteContact({ deleteContact, toggleModal }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={toggleModal}
      overlayClassName={css.backdrop}
      className={css.modal}
    >
      <div className={css.modal}>
        <p className={css.description}>Confirm deletion of contact?</p>

        <ul className={css["buttons-list"]}>
          <li>
            <button
              className={css.btn}
              type="button"
              onClick={() => deleteContact()}
            >
              Delete
            </button>
          </li>
          <li>
            <button className={css.btn} type="button" onClick={toggleModal}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default ModalDeleteContact;
