// src/Product.jsx
import css from "./Description.module.css";
const Description = () => {
  return (
    <>
      <h2 className={css.title}>Sip Happens Café</h2>
      <p className={css.paragraf}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>{" "}
    </>
  );
};
export default Description;
