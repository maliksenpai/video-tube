export const videoDetailReducer = (state=null , action) => {
    switch (action.type) {
        case "getDetail":
            state = action.payload.video;
            return state;
        default:
            return state;
    }
}