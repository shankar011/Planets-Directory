import axios from "axios";

const BASE_URL = 'https://swapi.dev/api';

export const getPlants = async (url) => {
    try {
        const response = await axios.get(url || `${BASE_URL}/planets/?format=json`);
        return response.data;
    } catch (error) {
        console.error('Error fetching planents:', error);
        throw error
    }
};

export const getResidents = async (residentURLs) => {
    try {
        const request = residentURLs.map((url) => axios.get(url));
        const response = await Promise.all(request);

        return response.map((response) => response.data);
    } catch (error) {
        console.error('Error fetching planents:', error);
        throw error
    }
}