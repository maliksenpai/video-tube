import {Box, Chip, List, ListItem, Paper} from "@mui/material";

export function MainAppBarChips() {

    function click() {

    }

    return <Box sx={{width:"100vw"}} p={1} >
       <List sx={{display:"flex", flexDirection:"row"}}>
           <ListItem sx={{display:"inline"}}>
               <Chip color={"error"} label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem sx={{display:"inline"}}>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>
           <ListItem>
               <Chip label={"Neque porro quisquam"} onClick={click} />
           </ListItem>

       </List>

    </Box>

}