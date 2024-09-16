import css from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to the PhoneBook!</h1>
        <p>
          This application is developed using the React library and includes the
          following functionality:
        </p>
        <ul className={css.list}>
          <li>Registration and authorization of users;</li>
          <li>
            Add and delete contacts stored in the user&apos;s private collection;
          </li>
          <li>Search contacts by name or phone number;</li>
        </ul>
        <p>
          In the development of the application, libraries were used:{" "}
          <span className={css.libraries}>
            Redux/Redux Toolkit, React Router, Persist, Axios, Formik, Yup, Toast,
            clsx, Nanoid, Icons, Loader, Modal
          </span>
          .
        </p>
      </div>
    </>
  );
}

export default HomePage;
