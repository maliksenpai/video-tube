import getDataVideos from "../data/DataVideos";
import {useDispatch} from "react-redux";
import dataVideos from "../data/DataVideos";

export const fetchInitialVideos = () => dispatch =>{

    dispatch(loadingInitialVideos());
    dataVideos.getDataVideos().then(value => {
       dispatch(readyData(value));
    });

}

export const loadingInitialVideos = () => {
    return{
        type: "loadingData",
    }
}

export const readyData = (videos) => {
    return{
        type: "readyData",
        payload:{
            videos: videos
        }
    };
}

export const detailVideo = (video) => {
    return{
        type: "getDetail",
        payload:{
            video: video
        }
    };
}

export const filterVideoList = (filter) => dispatch => {
    dispatch(filterLoadingVideos());

    dataVideos.getDataVideoFilter(filter).then(value => {
       dispatch(filterVideoListReady(value.videos));
    });
}

export const filterLoadingVideos = ()  => {
    return{
        type: "loading"
    };
}

export const filterVideoListReady = (videos) => {
    return{
        type: "filterVideoList",
        payload:{
            videos: videos
        }
    };
}
