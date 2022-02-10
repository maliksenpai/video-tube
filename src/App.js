import logo from './logo.svg';
import './style/App.css';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import MainPage from "./page/MainPage";
import VideoDetailPage from "./page/VideoDetailPage";
import getDataVideos from "./data/DataVideos";
import {MainAppBar} from "./view/MainAppBar";

function App() {
  return (
    <div className="App">
        <MainAppBar />
        <Switch>
            <Route exact path={"/"} component={MainPage} />
            <Route path={"/video/:video"} component={(props) => <VideoDetailPage video={props.match.params.video} />} />
        </Switch>
    </div>
  );
}

export default App;