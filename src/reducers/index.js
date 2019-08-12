import initialState from './../initial-state';

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_MENU":
            return state["main-menu"];
        
        default: return state;
    }
    
};


export default reducer;