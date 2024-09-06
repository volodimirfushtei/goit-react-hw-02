import { useState, useEffect } from "react";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const LOCAL_STORAGE_KEY = "feedbacks";

export default function App() {
  // Ініціалізуємо стан з локального сховища або з нульових значень
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0, total: 0, positive: 0 };
  });

  // Обчислення загальної кількості відгуків та позитивних
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = totalFeedback
    ? Math.round(feedbacks.good / totalFeedback) * 100
    : 0;
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => {
      // Оновлюємо кількість відгуків
      const updatedFeedbacks = {
        ...prevFeedbacks,
        [feedbackType]: prevFeedbacks[feedbackType] + 1,
        total: prevFeedbacks.total + 1,
      };

      // Обчислюємо новий відсоток позитивних відгуків
      const newPositivePercentage = updatedFeedbacks.total
        ? (updatedFeedbacks.good / updatedFeedbacks.total) * 100
        : 0;

      return {
        ...updatedFeedbacks,
        positivePercentage: newPositivePercentage,
      };
    });
  };

  const resetFeedback = () => {
    const resetFeedbacks = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positivePercentage: 0,
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
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </>
  );
}
