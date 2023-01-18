export const checkAvailbleTimeSlot = (sport, selectedEventData) => {
  const sportStartTime = new Date(sport?.start_time).getHours();
  let isTimeSlotAvailable = true;
  selectedEventData?.map((selectedSport) => {
    const selectedSportStartTime = new Date(
      selectedSport?.start_time
    ).getHours();
    const selectedSportEndTime = new Date(selectedSport?.end_time).getHours();
    if (selectedSportStartTime === sportStartTime) {
      isTimeSlotAvailable = false;
    } else if (
      selectedSportStartTime < sportStartTime &&
      sportStartTime < selectedSportEndTime
    ) {
      isTimeSlotAvailable = false;
    } else if (
      selectedSportStartTime < sportStartTime &&
      sportStartTime < selectedSportEndTime
    ) {
      isTimeSlotAvailable = false;
    }
  });
  return isTimeSlotAvailable;
};
