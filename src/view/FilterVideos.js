import {Component} from "react";
import {filterVideoList, getData, readyData} from "../actions/ApiAction";
import {connect} from "react-redux";
import {Box, Button, Grid, TextField} from "@mui/material";
import {Search, SearchOutlined} from "@mui/icons-material";
import '../style/App.css';


const mapStateToProps = state => {
    return{
        state: state.videoListReducer
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        filterVideoList: (filter) => dispatch(filterVideoList(filter))
    }
}
class FilterVideos extends Component{

    constructor(props) {
        super(props);
        this.state = {
          filter: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInput(value){
        this.setState({
            filter: value.target.value
        });
    }

    handleSearch(){
        this.props.filterVideoList(this.state.filter);
    }

    render() {
        return (
            <Grid container spacing={0} pt={0.5} alignItems={"center"}>
                <Grid item sm={10}>
                    <div className={"searchTextField"}>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            size={"small"}
                            placeholder={"Search"}
                            value={this.state.filter}
                            onChange={this.handleInput}
                            sx={{height:"80%",}}
                        />
                    </div>
                </Grid>
                <Grid item sm={1}>
                    <Button
                        fullWidth
                        onClick={this.handleSearch}
                        variant={"outlined"}
                        className={"searchButton"}
                        sx={{color:"#808080", borderColor:"#808080", height:"80%"}}
                    >
                        <SearchOutlined />
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterVideos);