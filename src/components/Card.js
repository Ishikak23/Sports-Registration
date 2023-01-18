import React from "react";
import { format } from 'date-fns'

const Card = (props) => {
  const {
    totalevent,
    selectedEvent,
    buttonText,
    isDisabled,
    isAddButton,
  } = props;
  const calculateTime = (startDate, endDate) => {
    const startTime = format(new Date(startDate),'hh:mm a');
    const endTime =  format(new Date(endDate),'hh:mm a');
    return startTime + "-" + endTime;
  };
  const handleClick = () => {
    selectedEvent(totalevent);
  };
  return (
    <div className="card">
      <img
        src="https://thumbs.dreamstime.com/b/olympic-swimming-pool-under-water-background-underwater-swim-157395312.jpg"
        alt="altrenate-img"
      ></img>
      <div className="cardLayout">
        <h3 className="cardTitle">{totalevent?.event_name}</h3>
        <h4 className="cardDescription">{totalevent?.event_category}</h4>
        <h4 className="cardTime">
          {calculateTime(totalevent?.start_time, totalevent?.end_time)}
        </h4>
        <button
          className={isAddButton ? !isDisabled? "add-btn": "disable-btn" : "remove-btn"}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
