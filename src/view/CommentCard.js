import {Component} from "react";
import {Avatar, Box, Button, Grid, IconButton, Typography} from "@mui/material";
import {ThumbDownOutlined, ThumbUpOutlined} from "@mui/icons-material";

class CommentCard extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Box py={1}>
                <Grid container justifyContent={"start"} textAlign={"start"}>
                    <Grid item xs={0.8}>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </Grid>
                    <Grid item xs={11}>
                        <Box>
                            <Typography sx={{pr:1}} variant={"subtitle2"} display={"inline"}>
                                Coffee Shop
                            </Typography>
                            <Typography fontSize={"x-small"} color={"grey"} display={"inline"}>
                                2 month ago
                            </Typography>
                        </Box>
                        <Box py={1}>
                            <Typography variant={"body2"} fontSize={"small"}>
                                Curabitur at eros id sapien venenatis scelerisque quis et ligula
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container alignItems={"center"}>
                                <IconButton>
                                    <ThumbUpOutlined fontSize={"small"}/>
                                </IconButton>
                                521
                                <IconButton >
                                    <ThumbDownOutlined fontSize={"small"}/>
                                </IconButton>
                                <Grid item xs={0.5} />
                                <Button sx={{color:"#696969"}}>
                                    <Typography fontSize={"small"} fontWeight={"bold"}>
                                        Reply
                                    </Typography>
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    }

}

export default CommentCard;