import {AppBar, Avatar, Grid, IconButton, Typography} from "@mui/material";
import FilterVideos from "./FilterVideos";
import {AppsOutlined, Menu, NotificationsOutlined, VideoCameraFrontOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import '../style/App.css';

export function MainAppBar() {


    return <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor:"white" }} elevation={0}>
        <Grid container justifyContent={"space-between"}>
            <Grid item sm={2}>
                <Grid container alignItems={"center"}>
                    <IconButton size={"large"}>
                        <Menu />
                    </IconButton>
                    <Link to={"/"} className={"videoLink"}>
                        <Typography color={"red"} variant={"h5"}>
                            VideoTube
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
            <Grid item sm={6} >
                <FilterVideos />
            </Grid>
            <Grid item sm={2}>
                <Grid container pt={1}>
                    <Grid item>
                        <IconButton>
                            <VideoCameraFrontOutlined />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <AppsOutlined />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <NotificationsOutlined />
                        </IconButton>
                    </Grid>
                    <Grid item alignSelf={"center"}>
                        <Avatar
                            src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"}
                            alt={"avatar"}
                            sx={{height:24, width:24}}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </AppBar>
}