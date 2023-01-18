import Card from "./Card";
import { getMockData } from "../utility";
import { useEffect, useState } from "react";
import { mockSportsData } from "../mockData";
import ShowAlert from "./ShowAlert";
import { checkAvailbleTimeSlot } from "../helper";

const Body = () => {
  const getEventMockData = async () => {
    const response = await getMockData();
    setEventdata(response);
  };
  const [eventData, setEventdata] = useState(mockSportsData);
  const [selectedEventData, setSelectedEventData] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Event Update Failed!");
  const [toastDescription, setToastDescription] = useState("");

  useEffect(() => {
    getEventMockData();
  }, []);

  const handleSelectedevent = (sport) => {
    if (selectedEventData.length < 3) {
      if (checkAvailbleTimeSlot(sport, selectedEventData)) {
        const selectedEventList = eventData.filter(
          (sportsEvent) => sportsEvent.event_name === sport.event_name
        );
        setSelectedEventData([...selectedEventData, ...selectedEventList]);
      } else {
        setToastTitle("Event Update Failed!");
        setToastDescription("Time slot not avilable");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    } else {
      setToastTitle("Event Update Failed!");
      setToastDescription("Only 3 event can be selected");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };
  const handleUnSelectedevent = (sport) => {
    const updatedSelectedEvent = selectedEventData.filter(
      (sportsEvent) => sportsEvent.event_name !== sport.event_name
    );
    setSelectedEventData(updatedSelectedEvent);
  };

  return (
    <div data-testid="sport-registration-body" className="body-wrapper">
      <div className="body">
        <div className="total-event">
          <h1 style={{ color: "#4E6C50" }}>Total Events</h1>
          <div className="cardList">
            {eventData?.map((sportsEvent) => {
              return (
                <Card
                  key={sportsEvent?.id}
                  totalevent={sportsEvent}
                  selectedEvent={handleSelectedevent}
                  buttonText="Select"
                  isDisabled={
                    selectedEventData.includes(sportsEvent) ? true : false
                  }
                  isAddButton={true}
                />
              );
            })}
          </div>
        </div>
        <div className="vl"></div>
        <div className="selected-event">
          <h1 style={{ color: "#4E6C50" }}>Selected Events</h1>
          <div className="cardList">
            {selectedEventData?.map((sportsEvent) => {
              return (
                <Card
                  key={sportsEvent?.id}
                  totalevent={sportsEvent}
                  selectedEvent={handleUnSelectedevent}
                  buttonText="Remove"
                  isDisabled={false}
                  isAddButton={false}
                />
              );
            })}
          </div>
        </div>
        {showToast && (
          <ShowAlert title={toastTitle} description={toastDescription} />
        )}
      </div>
    </div>
  );
};

export default Body;
