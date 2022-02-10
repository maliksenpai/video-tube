import {Component} from "react";
import {fetchInitialVideos, getData, readyData} from "../actions/ApiAction";
import withRouter from "react-router-dom/withRouter";
import {connect} from "react-redux";
import '../style/App.css';
import {Link} from "react-router-dom";
import {VideoCard} from "../view/VideoCard";
import FilterVideos from "../view/FilterVideos";
import ContentLoader from "react-content-loader";
import {getVideos} from "../reducer/VideoListSlice";
import {MainAppBar} from "../view/MainAppBar";
import {Box, Container, Divider, Drawer, Grid} from "@mui/material";
import {MainSideBar} from "../view/MainSideBar";
import {MainAppBarChips} from "../view/MainAppBarChips";


const mapStateToProps = state => {
    return{
        state: state.videoListReducer,
        stateSlice: state.videoListSlice,
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchInitialVideos: () => dispatch(fetchInitialVideos()),
        getVideos: () => dispatch(getVideos()),
    }
}

class MainPage extends Component{


    componentDidMount() {
        if(this.props.state.isLoading){
            this.props.fetchInitialVideos();
            //this.props.getVideos();
        }
    }

    render() {
        const emptyBox = <div>
            <ContentLoader viewBox="0 0 300 200">
                <rect x="80" y="17" rx="4" ry="4" width="300" height="150" />
                <rect x="80" y="180" rx="3" ry="5" width="250" height="10" />
            </ContentLoader>
        </div>

        const emptyComponent = <div className={"videoList"}>
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
            {emptyBox}
        </div>

        const validComponent = <Grid container rowGap={1} columnGap={1} columns={13}>
            {
                this.props.state.videos.map((element)=>{
                    return <Grid item key={element.id} md={3} sm={6} className={"videoCard"}>
                        <VideoCard element={element} />
                    </Grid>
                })
            }
        </Grid>
        return (
            <Box display={"flex"}>
                <MainSideBar />
                <Box component={"main"} sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Divider sx={{p:2}} />
                    <Box pb={2}/>
                    {
                        this.props.state.isLoading  ? emptyComponent : validComponent
                    }
                </Box>
            </Box>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));