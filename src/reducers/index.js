const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_MENU":
            return state.mainMenu;
        case "GET_BANNER":
            return state.banner;
        case "GET_ABOUT":
            return state.about;
        case "GET_RELATIONSHIPS":
            return state.relationships;
        case "GET_REQUIREMENTS":
            return state.requirements;
        case "GET_USERS":
            return state.users;
		case "GET_USERS_API": {
			const {users, users: {usersList}, users: {loadMoreBtn}} = state;
			const res = {
				usersList: [...usersList, ...action.usersList],
				totalPages: action.totalPages,
				totalUsers: action.totalUsers,
				loading: action.loading,
				page: action.page,
				
			};
			Object.assign(loadMoreBtn, {IsLoading: action.loadBtnIsLoading});
			Object.assign(users, res );
			return {...state};
		}
			
		case "HIDE_LOAD_MORE_BTN": {
			const { loadMoreBtn } = state.users;
			Object.assign(loadMoreBtn,   {show: action.payload});
			return {...state};
		}
		
		case "LOAD_BTN_IS_LOADING": {
			const { loadMoreBtn } = state.users;
			Object.assign(loadMoreBtn,  {IsLoading: action.payload});
			return {...state};
		}
			
	

        default: return state;
    }

};


export default reducer;