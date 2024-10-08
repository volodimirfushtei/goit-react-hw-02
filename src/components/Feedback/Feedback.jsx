import s from "./Feedback.module.css"; // Переконайтесь, що шлях до файлу правильний

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  if (totalFeedback === 0) {
    return null;
  }

  return (
    <div className={s.feedback}>
      <p className={s.feedback_item}>Good: {good}</p>
      <p className={s.feedback_item}>Neutral: {neutral}</p>
      <p className={s.feedback_item}>Bad: {bad}</p>
      <p className={s.feedback_item}>Total: {totalFeedback}</p>
      <p className={s.feedback_item}>
        Positive: {Math.round((good / totalFeedback) * 100)}%
      </p>
    </div>
  );
};

export default Feedback;
