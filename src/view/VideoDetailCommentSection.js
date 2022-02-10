import {Component} from "react";
import {Avatar, Button, Grid, TextField, Typography} from "@mui/material";
import {SortOutlined} from "@mui/icons-material";
import CommentCard from "./CommentCard";

class VideoDetailCommentSection extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Grid container columnGap={1} alignItems={"center"}>
                    <Typography>
                        825 Comments
                    </Typography>
                    <Button>
                        <SortOutlined />
                        SORT BY
                    </Button>
                </Grid>
                <Grid container justifyContent={"space-between"} textAlign={"start"} alignItems={"center"}>
                    <Grid item xs={0.8}>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </Grid>
                    <Grid item xs={11} justifyContent={"end"}>
                        <TextField variant={"standard"} fullWidth placeholder={"Add a public comment"} />
                        <Button sx={{color:"#696969"}}>
                            Cancel
                        </Button>
                        <Button sx={{color:"#696969"}}>
                            Comment
                        </Button>
                    </Grid>
                </Grid>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        );
    }

}

export default VideoDetailCommentSection;