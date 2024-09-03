import s from "./Options.module.css";

const Options = () => {
  const updateFeedback = (feedbackType) => {};

  return (
    <>
      <form className={s.form}>
        <button className={s.button}>Good</button>
        <button className={s.button}>Neutral</button>
        <button className={s.button}>Bad</button>
      </form>
    </>
  );
};
export default Options;
