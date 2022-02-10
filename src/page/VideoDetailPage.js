import {Component} from "react";
import {detailVideo, getData, readyData} from "../actions/ApiAction";
import {connect} from "react-redux";
import withRouter from "react-router-dom/withRouter";
import dataVideos from "../data/DataVideos";
import ReactPlayer from "react-player";
import {VideoCard} from "../view/VideoCard";
import {Link} from "react-router-dom";
import '../style/DetailPage.css';
import {Box, Card, Grid, IconButton, Slider, Stack} from "@mui/material";
import {VideoDetailCard} from "../view/VideoDetailCard";
import {
    ClosedCaption, ConnectedTv, FitScreen, Fullscreen,
    Pause,
    PlayArrow, Settings,
    SkipNext,
    StartOutlined,
    StopOutlined, VolumeDown,
    VolumeDownOutlined, VolumeUp,
    VolumeUpOutlined
} from "@mui/icons-material";
import {VideoDetailVideoPlayer} from "../view/VideoDetailVideoPlayer";
import VideoDetailInformation from "../view/VideoDetailInformation";

const mapStateToProps = state => {
    return{
        state: state.videoDetailReducer,
        mainState : state.videoListReducer,
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        getDetail: (video) => dispatch(detailVideo(video)),
    }
}


class VideoDetailPage extends Component{
    constructor(props) {
        super(props);
        let videos = props.mainState.videos;
        this.state = {
            video: videos.find((element) => element.id == props.video),
            suggests: videos.sort(() => 0.5 - Math.random()).slice(0,20),
        }
    }



    render() {
        return (
            <div className={"detailPagePadding"}>
                <Box px={7}>
                    <Grid container pt={2} flexWrap={"wrap"}>
                        <Grid item md={8} sm={12} className={"videoPlayer"}>
                            <div className={"videoPlayerSection"}>
                                <VideoDetailVideoPlayer
                                    url={this.state.video.video_files[0].link}
                                    video={this.state.video}
                                />
                            </div>
                            <VideoDetailInformation />
                        </Grid>
                        <Grid item md={4} sm={12} className={"videoPlayerSuggests"} sx={{backgroundColor:"#f1f1f1"}}>
                            {
                                this.state.suggests.map((element) =>{
                                    return(
                                        <Card elevation={0} key={element.id} className={"videoPlayerSuggestItem"}>
                                            <VideoDetailCard element={element} />
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDetailPage));