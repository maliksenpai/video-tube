import {
    Avatar, Box,
    Divider, Drawer,
    Grid,
    IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    Paper, Toolbar,
    Typography
} from "@mui/material";
import {
    DownloadOutlined, ExpandMoreOutlined,
    ExploreOutlined, HistoryOutlined,
    Home,
    HomeOutlined, LibraryMusicOutlined,
    Menu,
    NavigationOutlined, OndemandVideoOutlined,
    SubscriptionsOutlined, ThumbUpOutlined, VideoLibraryOutlined, WatchLaterOutlined
} from "@mui/icons-material";
import '../style/App.css';

export function MainSideBar() {

    return <Drawer
        sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
            },
        }}
        variant={"permanent"}
        anchor={"left"}>
        <Toolbar />
        <List sx={{height:"100vh", width:"200px", overflow:"auto"}}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeOutlined />
                    </ListItemIcon>
                    Home
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ExploreOutlined />
                    </ListItemIcon>
                    Explore
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SubscriptionsOutlined />
                    </ListItemIcon>
                    Subscriptions
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LibraryMusicOutlined />
                    </ListItemIcon>
                    Musics
                </ListItemButton>
            </ListItem>
            <Divider sx={{py:1}} />
            <ListItem sx={{pt:1}} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <VideoLibraryOutlined />
                    </ListItemIcon>
                    Library
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HistoryOutlined />
                    </ListItemIcon>
                    History
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <OndemandVideoOutlined />
                    </ListItemIcon>
                    Your Videos
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <WatchLaterOutlined />
                    </ListItemIcon>
                    Watch Later
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DownloadOutlined />
                    </ListItemIcon>
                    Downloads
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ThumbUpOutlined />
                    </ListItemIcon>
                    Liked Videos
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ExpandMoreOutlined />
                    </ListItemIcon>
                    Show More
                </ListItemButton>
            </ListItem>
            <Divider sx={{py:1}} />
            <Typography sx={{pt:1}}>
                Subscriptions
            </Typography>
            <ListItem disablePadding sx={{pt:1}}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </ListItemAvatar>
                    Subscription 1
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </ListItemAvatar>
                    Subscription 2
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </ListItemAvatar>
                    Subscription 3
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </ListItemAvatar>
                    Subscription 4
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={"https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E"} />
                    </ListItemAvatar>
                    Subscription 5
                </ListItemButton>
            </ListItem>
            <Grid container>

            </Grid>
        </List>
    </Drawer>
}