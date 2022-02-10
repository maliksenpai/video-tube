import {Avatar, Card, CardContent, CardMedia, Grid, TableCell, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export function VideoDetailCard(props) {


    return <div key={props.element.id}>
        <Link className={"videoLink"} to={`/video/${props.element.id}`}>
            <Grid container gap={1} columns={13} bgcolor={"#f1f1f1"}>
                <Grid item sm={6}>
                    <div className={"videoImgDiv"}>
                        <img className={"videoImg"} src={props.element.image} alt={props.element.image}/>
                        <div className={"videoDurationText"}> {new Date(1000* props.element.duration).toISOString().substr(14, 5)} </div>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <div className={"videoContentTitle"}>
                        {props.element.user.name}
                    </div>
                    <Typography textAlign={"start"} fontSize={12} variant={"subtitle2"} component={"p"}>
                        {props.element.user.name}
                    </Typography>
                    <Typography textAlign={"start"} fontSize={12} variant={"subtitle2"} component={"p"}>
                        7.2k views ● 2 hours ago
                    </Typography>
                </Grid>
            </Grid>
        </Link>
    </div>
}