import { useState } from "react";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
export default function App() {
  // Ініціалізуємо стан з об'єктом для типів відгуків
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    Positive: 0,
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  {
    totalFeedback > 0 ? <Feedback /> : <Notification />;
  }
  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      Positive: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        haveFeedback={totalFeedback > 0}
      />
      <Notification totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}
