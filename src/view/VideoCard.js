import {Link} from "react-router-dom";
import {Avatar, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

export function VideoCard(props) {
   return(
       <div key={props.element.id}>
           <Link className={"videoLink"} to={`/video/${props.element.id}`}>
               <Card elevation={0}>
                   <CardMedia>
                       <div className={"videoImgDiv"}>
                           <img className={"videoImg"} src={props.element.image} alt={props.element.image}/>
                           <div className={"videoDurationText"}> {new Date(1000* props.element.duration).toISOString().substr(14, 5)} </div>
                       </div>
                   </CardMedia>
                   <CardContent>
                       <Grid container gap={1}>
                           <Grid item sm={2}>
                               <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                           </Grid>
                           <Grid item sm={9}>
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
                   </CardContent>
               </Card>
           </Link>
       </div>
   ) ;
}