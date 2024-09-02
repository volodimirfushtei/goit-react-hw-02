import { useState } from "react";

import Description from "./components/Description/Description";

export default function App() {
  // Ініціалізуємо стан з об'єктом для типів відгуків
  const [good, neutral, bad] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <>
      <Description />
    </>
  );
}
