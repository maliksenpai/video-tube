import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import dataVideos from "../data/DataVideos";

const videoInitialState = {
    videos: [],
    isLoading: true,
}

export const getVideos = createAsyncThunk(
    'getVideos',
    async () => {
        const videos = await dataVideos.getDataVideos();
        return videos;
    }
);

export const videoListSlice = createSlice({
    name: "videoList",
    initialState: videoInitialState,
    reducers:{},
    extraReducers:(builder => {
        builder.addCase(getVideos.pending, (state, action) => {
            const copyState = {...state};
            copyState.isLoading = true;
            copyState.videos = [];
            return copyState;
        });
        builder.addCase(getVideos.fulfilled, (state, action) => {
            const copyState = {...state};
            copyState.isLoading = false;
            copyState.videos = action.payload.videos;
            return copyState;
        })
    })
});