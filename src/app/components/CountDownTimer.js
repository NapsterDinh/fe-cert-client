import useCountDown from "app/hooks/useCountDown";
import { useEffect } from "react";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter d-flex">
      {/* <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p> */}
      <DateTimeDisplay value={hours} type={"h"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"m"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"s"} isDanger={false} />
    </div>
  );
};

const CountDownTimer = ({ targetDate, onSubmitExam }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds < 0) {
    (async () => {
      await onSubmitExam();
    })();
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger mx-1" : "countdown mx-1"}>
      <h2>{`${value}${type}`}</h2>
    </div>
  );
};

export default CountDownTimer;
