import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../constraints/status";
import { Character } from "../../types/characters";

interface ICharactersState {
    status: string;
    data: Character[];
}

const initialState: ICharactersState = {
    status: '',
    data: []
}

const handlePending = (state: ICharactersState) => {
    state.status = STATUS.LOADING;
}

const handleFulfulled = (state: ICharactersState, payload: Character[]) => {
    state.status = STATUS.SUCCESS;
    state.data = payload;
}

const handleRejected = (state: ICharactersState) => {
    state.status = STATUS.ERROR;
}

export const test = createAsyncThunk(
    'characters/getCharacters',
    async () => {
        axios.get(
            `https://bobsburgers-api.herokuapp.com/characters/`
        ).then((res) => {
            return res.data;
        }).catch(err => {
            return err.message;
        })
    }
)

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(test.pending, handlePending),
            // builder.addCase(test.fulfilled, handleFulfulled),
            builder.addCase(test.rejected, handleRejected)
    }
})

// export const { getCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;