import s from "./Notification.module.css";

const Notification = ({ totalFeedback }) => {
  if (totalFeedback === 0)
    return (
      <div className={s.notificationWrapp}>
        <p>No feedback yet !</p>
      </div>
    );
};

export default Notification;
