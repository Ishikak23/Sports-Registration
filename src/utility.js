// import axios from "axios";
export const getMockData = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a"
    );
    const jsonResponse =await response.json()
    return jsonResponse;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
