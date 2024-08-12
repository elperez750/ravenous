const API_KEY = "sb1_VLooTWCowj5sK7ofr5J4_juybybUKVmsLsdvy_WuOtGsQZC9qyO6N8PfJ3wsDXUX3Z5j7lCBxndGA6gxMBgRPb39WL3NJTeGsnB4XKikRUYiVXBKNGIW9eCyZnYx";
const API_BASE_URL = "https://api.yelp.com/v3/businesses";

const fetchBusinessDetails = async (key: string): Promise<any> => {
  try {
    console.log("Fetching Business Details", key);
    const response = await fetch(`${API_BASE_URL}/${key}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Response Data:", responseData); // Log the response data for debugging
      return responseData;
    } else {
      const errorData = await response.json();
      console.error("Error Response Data:", errorData);
      throw new Error(`Error fetching business details: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching business details:", error);
    throw error;
  }
};

export default fetchBusinessDetails;
