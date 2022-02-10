import ReactPlayer from "react-player";
import {Grid, IconButton, Slider} from "@mui/material";
import {
    ClosedCaption, ConnectedTv,
    FitScreen, Fullscreen,
    Pause,
    PlayArrow,
    Settings,
    SkipNext,
    VolumeDown,
    VolumeUp
} from "@mui/icons-material";
import * as PropTypes from "prop-types";
import {Component} from "react";
import '../style/DetailPage.css';

export class VideoDetailVideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: true,
            duration: "00:00",
            durationPercent: 0,
            volume: 100,
        }
        this.handleProgress = this.handleProgress.bind(this);
        this.handleStopAndResume = this.handleStopAndResume.bind(this);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
        this.handleVolumeButton = this.handleVolumeButton.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
    }

    ref = player => {
        this.player = player
    }

    handleProgress(progress){
        this.setState({
            duration: new Date(1000 * progress.playedSeconds).toISOString().substr(14, 5),
            durationPercent: (progress.playedSeconds / this.props.video.duration) * 100
        });
    }

    handleStopAndResume(){
        this.setState({
            playing: !this.state.playing
        })
    }

    handleChangeVolume(event, newValue){
        this.setState({
            volume: newValue
        });
    }

    handleVolumeButton(){
        this.setState({
            volume: this.state.volume === 0 ? 100 : 0
        })
    }

    handleChangeDuration(event, newValue){
        const newDuration = (newValue * this.props.video.duration);
        this.setState({
            duration: new Date(newDuration / 100).toISOString().substr(14, 5),
            durationPercent: (newDuration / 100)
        })
    }

    render() {
        return (
            <div className={"videoPlayerRelative"}>
                <ReactPlayer
                    ref={this.ref}
                    url={this.props.url}
                    playing={this.state.playing}
                    loop={true}
                    width={"100%"}
                    height={"500px"}
                    volume={this.state.volume / 100}
                    onProgress={this.handleProgress}
                />
                <div className={"videoPlayerBottom"}>
                    <div className={"videoPlayerDurationSlider"}>
                        <Slider sx={{width: "100%", p: 0, color: "red"}} value={this.state.durationPercent} onChange={this.handleChangeDuration}/>
                    </div>
                    <div className={"videoPlayerControlPanel"}>
                        <div className={"videoPlayerControlPanelSection"}>
                            <IconButton title={this.state.playing ? "Stop" : "Play"} onClick={this.handleStopAndResume}>
                                {this.state.playing ? <Pause sx={{color: "#f1f1f1"}}/> : <PlayArrow sx={{color: "#f1f1f1"}}/>}
                            </IconButton>
                            <IconButton title={"Skip Next"}>
                                <SkipNext sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                            <IconButton title={"Volume"} onClick={this.handleVolumeButton}>
                                {this.state.volume < 50 ? <VolumeDown sx={{color: "#f1f1f1"}}/> :
                                    <VolumeUp sx={{color: "#f1f1f1"}}/>}
                            </IconButton>
                            <Slider sx={{width: "20%", mx: 1, color: "#f1f1f1"}} aria-label="Volume" value={this.state.volume}
                                    onChange={this.handleChangeVolume}/>
                            <div className={"videoPlayerDuration"}>
                                {this.state.duration} / {new Date(1000 * this.props.video.duration).toISOString().substr(14, 5)}
                            </div>
                        </div>
                        <div className={"videoPlayerControlPanelSection videoPlayerControlPanelSecond"}>
                            <IconButton>
                                <ClosedCaption sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                            <IconButton>
                                <Settings sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                            <IconButton>
                                <FitScreen sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                            <IconButton>
                                <ConnectedTv sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                            <IconButton>
                                <Fullscreen sx={{color: "#f1f1f1"}}/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}