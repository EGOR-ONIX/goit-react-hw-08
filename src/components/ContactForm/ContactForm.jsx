import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import toast from "react-hot-toast";

function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const FormScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "*The contact name is quite short!")
      .max(50, "*The contact name is quite long!")
      .required("*Contact name is a required field!"),
    number: Yup.string()
      .matches(phoneRegExp, "*The number does not match the format: xxx-xx-xx")
      .required("*Contact number is a required field!"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }))
      .unwrap()
      .then((newContact) => {
        toast.success(`Contact "${newContact.name}" successfully added!`);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormScheme}
    >
      <Form className={css.form}>
        <div className={css["wrapper-inputs"]}>
          <label className={css.label} htmlFor={nameFieldId}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label} htmlFor={numberFieldId}>
            <Field
              className={css.input}
              type="tel"
              name="number"
              placeholder="Number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </label>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
