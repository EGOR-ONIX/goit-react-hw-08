import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const registrationFormScheme = Yup.object().shape({
    name: Yup.string()
      .required("*No name provided!")
      .min(1, "*Username is too short - should be 2 or more characters minimum")
      .max(50, "*Username is quite long - should be 50 characters maximum"),
    email: Yup.string()
      .email("*Incorrectly entered email")
      .required("*No email provided!"),
    password: Yup.string()
      .required("*No password provided!")
      .min(8, "*Password is too short - should be 8 chars minimum")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase latin letter")
      .matches(/[A-Z]/, "Password requires an uppercase latin letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationFormScheme}
    >
      <Form className={css.form}>
        <div className={css["wrapper-inputs"]}>
          <label className={css.label} htmlFor={nameFieldId}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label} htmlFor={emailFieldId}>
            <Field
              className={css.input}
              type="text"
              name="email"
              placeholder="Enter email"
              id={emailFieldId}
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label} htmlFor={passwordFieldId}>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter password"
              id={passwordFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
        </div>

        <button className={css.btn} type="submit">
          Sign up
        </button>
        <NavLink to="/login" className={css["login-link"]}>
          Have account? Login
        </NavLink>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
