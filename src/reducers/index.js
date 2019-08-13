import initialState from './../initial-state';

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_MENU":
            return state["main-menu"];
        case "GET_BANNER":
            return state["banner"];
        case "GET_ABOUT":
            return state["about"];
        
        default: return state;
    }
    
};


export default reducer;