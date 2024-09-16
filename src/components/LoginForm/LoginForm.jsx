import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const loginFormScheme = Yup.object().shape({
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
    dispatch(login({ ...values }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginFormScheme}
    >
      <Form className={css.form}>
        <div className={css["wrapper-inputs"]}>
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
          Login
        </button>
        <NavLink to="/register" className={css["register-link"]}>
          Don&apos;t have account? Register
        </NavLink>
      </Form>
    </Formik>
  );
}

export default LoginForm;
