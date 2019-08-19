import AbzService from './../service/AbzService';
// import { sortingUrersByRegistrationDate } from './../assets/libs/sortingUrersByRegistrationDate';

const abzApiService = new AbzService();

export const getMenu = () => ( {type: "GET_MENU"} );
export const getBanner = () => ( {type: "GET_BANNER"} );
export const getAbout = () => ( {type: "GET_ABOUT"} );
export const getRelationships = () => ( {type: "GET_RELATIONSHIPS"} );
export const getRequirements = () => ( {type: "GET_REQUIREMENTS"} );
export const getUsers = () => ( {type: "GET_USERS"} );
export const getUsersAPI = (page,count) => async dispatch => {
	const response  = await abzApiService
		.getUsers(page,count)
		.then(data => { return  data } );
	dispatch({
		type: 'GET_USERS_API',
		usersList: response.users,
		totalPages: response.total_pages,
		totalUsers: response.total_users,
		page: page,
		loading: false,
		loadBtnIsLoading: false
	})
};
export const hideLoadMoreBtn = () => ({
	type: "HIDE_LOAD_MORE_BTN",
	payload: false
});
export const loadBtnToLoading = () => ({
	type: "LOAD_BTN_IS_LOADING",
	payload: true
});
