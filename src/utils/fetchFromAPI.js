const BASE_URL = "https://fakestoreapi.com";
export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
