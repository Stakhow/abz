import React, {Component} from 'react';
import './users.sass';
import BtnSecondary from "../btn-secondary/btn-secondary";
import Spinner from "../spinner/spinner";
import UserItem from "../user-item/user-item";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../actions/actions';

class Users extends Component {

	componentDidMount() {
		this.props.getUsersAPI(1,6);
    }
    
    scope = () => {
		this.props.loadBtnToLoading();
		this.loadMore();
	}
	
	loadMore = () => {
		// this.props.loadBtnToLoading();
        const totalPages = this.props.users.totalPages;
        const currentPage = this.props.users.page;
        let nextPage = currentPage + 1; // устанавливаем запрашиваемую страницу
        if (nextPage <= totalPages) {
			this.props.getUsersAPI(nextPage,6);
            if (nextPage === totalPages) this.props.hideLoadMoreBtn(); // если запрашивамая страница равна общему количеству страниц - скрываем кнопку "Show more"
        }
    };
	
	render() {
        const { users: {title, subtitle, usersList, loading, loadMoreBtn} } = this.props;
        if(loading) return <Spinner/>; // отображаем спиннер, пока не загрузятся данные
        
		return (
            <section id="users" className="common-section users">
                <div className="container">
                    <div className="row">
                        <div className="col-12 section-title">
                            <h2>{title}</h2>
                            <h5>{subtitle}</h5>
                        </div>
                    </div>
                    <div className="row">
					{usersList.map((user) =>{
						return <UserItem key={user.id} user={ user } />
					})}
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {loadMoreBtn.show === true ?
								(<BtnSecondary
									text={"Show more"}
									onClickHandler={this.scope}
									status={this.props.IsLoading}/>) : null}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
		usersList: state.users.usersList,
		IsLoading: state.users.loadMoreBtn.IsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
	const { getUsersAPI, hideLoadMoreBtn, loadBtnToLoading } = bindActionCreators(actions, dispatch);
	return {
		getUsersAPI: (page, count) => {
			getUsersAPI(page, count);
		},
		hideLoadMoreBtn: () => {
			hideLoadMoreBtn();
	  	},
		loadBtnToLoading: () => {
			loadBtnToLoading();
	  	}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);