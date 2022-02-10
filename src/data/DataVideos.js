const key = "";

async function getDataVideos() {
    let api = "https://api.pexels.com/videos/popular?per_page=40";

    let data = await fetch(api, {
        method: "get",
        headers: new Headers({
            'Authorization': key,
        })
    });

    let json = await data.json();
    return json;
}

async function getDataVideoFilter(filter){
    let api = "https://api.pexels.com/videos/search?query="+filter+"&per_page=40";

    let data = await fetch(api, {
        method: "get",
        headers: new Headers({
            'Authorization': key,
        })
    });

    let json = await data.json();
    return json;
}

async function getDetailVideo(videoId){

}


const dataVideos = {
    getDataVideos:  getDataVideos,
    getDetailVideo:  (videoId) => getDetailVideo(videoId),
    getDataVideoFilter: (filter) => getDataVideoFilter(filter)
}

export default dataVideos;