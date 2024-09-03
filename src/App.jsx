import { useState } from "react";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
export default function App() {
  // Ініціалізуємо стан з об'єктом для типів відгуків
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [type]: prevFeedbacks[type] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options onFeedback={handleFeedback} />
      <Feedback
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
      />
    </>
  );
}
