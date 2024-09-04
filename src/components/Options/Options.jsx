import s from "./Options.module.css";

const Options = ({ updateFeedback }) => {
  return (
    <>
      <form className={s.form}>
        <button
          type="button"
          className={s.button}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </form>
    </>
  );
};
export default Options;
