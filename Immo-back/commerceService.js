import axios from "axios";

const EXTERNAL_API_URL =
  "https://data.iledefrance.fr/api/explore/v2.1/catalog/datasets/commerces-de-proximite-agrees-ratp/records?limit=20";

export const getAllCommerces = async () => {
  try {
    const response = await axios.get(EXTERNAL_API_URL);
    console.log("API Response:", response.data); 
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("No results found in the API response");
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des commerces :", error);
    throw new Error("Impossible de récupérer les données des commerces.");
  }
  
};
