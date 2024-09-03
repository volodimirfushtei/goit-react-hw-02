import s from "./Options.module.css";

const Options = ({ onFeedback }) => {
  const handleClick = (type) => {
    onFeedback(type);
  };

  return (
    <>
      <form className={s.form}>
        <button
          type="button"
          className={s.button}
          onClick={() => handleClick("good")}
        >
          Good
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => handleClick("neutral")}
        >
          Neutral
        </button>
        <button
          type="button"
          className={s.button}
          onClick={() => handleClick("bad")}
        >
          Bad
        </button>
      </form>
    </>
  );
};
export default Options;
