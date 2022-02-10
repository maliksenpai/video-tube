import {Component} from "react";
import {Avatar, Box, Button, Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import {
    ContentCutOutlined,
    DownloadOutlined, MoreHorizOutlined, NotificationsOutlined, PlaylistAddOutlined,
    ShareOutlined,
    ThumbDown,
    ThumbDownOutlined,
    ThumbUpOutlined
} from "@mui/icons-material";
import VideoDetailCommentSection from "./VideoDetailCommentSection";

class VideoDetailInformation  extends Component{


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Box pt={2}>
                <Typography variant={"h5"} textAlign={"start"}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </Typography>
                <Grid container justifyContent={"space-between"}>
                    <Grid item>
                        <Typography variant={"body2"} textAlign={"start"}>
                            7.2k views ● 2 hours ago
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button sx={{color:"black"}}>
                            <ThumbUpOutlined />
                            9.3K
                        </Button>
                        <Button sx={{color:"black"}}>
                            <ThumbDownOutlined />
                            Dislike
                        </Button>
                        <Button sx={{color:"black"}}>
                            <ShareOutlined />
                            Share
                        </Button>
                        <Button sx={{color:"black"}}>
                            <DownloadOutlined />
                            Download
                        </Button>
                        <Button sx={{color:"black"}}>
                            <ContentCutOutlined />
                            Clip
                        </Button>
                        <Button sx={{color:"black"}}>
                            <PlaylistAddOutlined />
                            Save
                        </Button>
                        <Button sx={{color:"black"}}>
                            <MoreHorizOutlined />
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{p:2}} />
                <Box pb={2}/>
                <Grid container justifyContent={"space-between"}>
                    <Grid item width={"50%"}>
                        <Grid container justifyContent={"start"} textAlign={"start"}>
                            <Grid item xs={2}>
                                <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant={"h6"}>
                                    Coffee Shop
                                </Typography>
                                <Typography fontSize={"smaller"}>
                                    705k subscribers
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width={"50%"}>
                        <Grid container columnGap={1} justifyContent={"end"}>
                            <Button variant={"outlined"}>
                                Join
                            </Button>
                            <Button variant={"outlined"}>
                                Subscribe
                            </Button>
                            <IconButton>
                                <NotificationsOutlined />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Typography textAlign={"start"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat augue ac aliquam auctor. Duis ac nibh semper, lacinia enim quis, ultrices ligula. In mauris diam, vestibulum vitae metus sagittis, ultrices scelerisque odio. Integer convallis, leo quis bibendum venenatis, ligula purus dignissim augue, non imperdiet augue leo vitae massa. Duis eu arcu suscipit, imperdiet tortor et, vestibulum velit. Nulla condimentum felis vel mauris efficitur fringilla. Etiam sed dictum urna. Aenean in erat eleifend, viverra turpis vitae, auctor arcu. Etiam dui orci, iaculis et turpis quis, placerat viverra nulla. Morbi sed malesuada magna.

                            Suspendisse non enim pharetra, convallis nisi ut, volutpat nunc. Ut nec tempus nisl. Nullam elementum urna eu felis mollis, a ultricies lectus porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut imperdiet mollis dolor a aliquam. Duis iaculis odio sed nulla laoreet, at hendrerit magna tincidunt. Integer urna ex, tristique ac felis vel, imperdiet feugiat erat.

                            Maecenas eleifend placerat purus in gravida. Ut condimentum ex id vehicula vehicula. Sed vel maximus risus, ut varius lectus. Pellentesque bibendum, orci quis fermentum euismod, erat massa tempor diam, nec ullamcorper orci elit ut risus. Aliquam cursus tortor eu eros vehicula cursus ac eget augue. Curabitur malesuada varius venenatis. Integer vel justo malesuada, suscipit libero vitae, dictum metus. Nullam lacus eros, facilisis at mauris ac, tempor vulputate mauris. Praesent eleifend, turpis et placerat sodales, sapien erat volutpat tellus, imperdiet tristique dui diam non dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam auctor elit in vestibulum posuere. Morbi ultricies neque ut magna eleifend, non mattis dolor elementum. In in odio ac sapien condimentum fringilla. Maecenas non tortor non nisi tempus tincidunt id at turpis. Nam blandit consectetur nisl, sit amet placerat nisl sollicitudin ac. Aliquam vel erat mi.

                            Vivamus placerat sit amet ante a rhoncus. Vivamus id blandit est. Duis laoreet viverra viverra. Proin quis nibh aliquam, luctus justo id, egestas eros. Vivamus semper ligula vel laoreet convallis. In hac habitasse platea dictumst. Cras sit amet maximus ligula, sit amet rutrum purus. Phasellus porttitor lobortis erat sodales porta. Cras in commodo purus. Nam sed lobortis erat, vitae semper sapien. Mauris tempus leo vitae aliquam convallis. Maecenas eu finibus libero, sed scelerisque turpis. Aliquam hendrerit metus a erat dapibus consequat. Praesent elementum sodales ligula, id mollis quam. Vivamus sed lobortis nisi. Integer bibendum vulputate ex, porttitor pharetra nisl dictum ut.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{p:2}} />
                <Box pb={2}/>
                <VideoDetailCommentSection />
            </Box>
        );
    }

}



export default VideoDetailInformation;