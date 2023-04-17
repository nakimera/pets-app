import axios from "axios";
import { getPets, setError } from "../store/slice";

const API_URL = "https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets";

export const fetchItems = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch(getPets(response.data));
    } catch (error) {
        dispatch(setError());
    }
};
