import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  return (
    <div className={s.feedback}>
      <p className={s.feedback_item}>Good: {good}</p>
      <p className={s.feedback_item}>Neutral: {neutral}</p>
      <p className={s.feedback_item}>Bad: {bad}</p>
    </div>
  );
};
export default Feedback;
