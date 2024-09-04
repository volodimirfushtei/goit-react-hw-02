import { useState } from "react";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const LOCAL_STORAGE_KEY = "feedbacks";
export default function App() {
  // Ініціалізуємо стан з об'єктом для типів відгуків
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0, total: 0, Positive: 0 };
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  {
    totalFeedback > 0 ? <Feedback /> : <Notification />;
  }

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => {
      const updatedFeedbacks = {
        ...prevFeedbacks,
        [feedbackType]: prevFeedbacks[feedbackType] + 1,
      };
      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(updatedFeedbacks)
      );
      return updatedFeedbacks;
    });
  };

  const resetFeedback = () => {
    const resetFeedbacks = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      Positive: 0,
    };
    setFeedbacks(resetFeedbacks);
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(resetFeedbacks)
    );
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
