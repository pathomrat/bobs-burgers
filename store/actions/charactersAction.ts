import axios from "axios";

const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
    return {
        type: GET_CHARACTERS
    }
}