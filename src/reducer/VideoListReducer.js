import getDataVideos from "../data/DataVideos";
import {readyData} from "../actions/ApiAction";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const videoListReducer = (state = {
    isLoading: true,
    videos: []
}, action) => {
    let copyState = {...state};
    switch (action.type) {
        case "getData":
            return copyState;
        case "loadingData":
            copyState.videos = [];
            copyState.isLoading = true;
            return copyState;
        case "readyData":
            copyState.videos = action.payload.videos.videos;
            copyState.isLoading = false;
            copyState.videos = copyState.videos.sort((a,b) => a.id - b.id);
            return copyState;
        case "getDetail":
            //todo:
            break;
        case "filterVideoList":
            copyState.videos.push.apply(copyState.videos, action.payload.videos);
            copyState.videos = copyState.videos.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i);
            copyState.videos = copyState.videos.sort((a,b) => a.id - b.id);
            return copyState;
        default:
            return copyState;
    }
}