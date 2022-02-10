import {combineReducers} from "redux";
import {videoListReducer} from "./VideoListReducer";
import {videoDetailReducer} from "./VideoDetailReducer";
import {videoListSlice} from "./VideoListSlice";

export const MainReducer = combineReducers({
    videoListReducer: videoListReducer,
    videoDetailReducer: videoDetailReducer,
    videoListSlice: videoListSlice.reducer,
});