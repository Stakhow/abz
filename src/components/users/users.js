import React, {Component} from 'react';
import './users.sass';
import BtnSecondary from "../btn-secondary/btn-secondary";
import AbzService from './../../service/AbzService.js';
import Spinner from "../spinner/spinner";
import UserItem from "../user-item/user-item";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: null,
                loading: true,
                usersList: [],
                page: null,
                totalPages: null,
                showLoadMoreBtn: true,
            }
    }

    abzApiService = new AbzService();



    componentDidMount() {
        this.loadData(1,6);
    }

    loadData (page, count) {
        this.abzApiService
            .getUsers(page,count)
            .then((data)=>{
                this.setState({
                    data: data,
                    loading: false,
                    usersList:  this.state.usersList.concat( data.users.sort( this.sortingUrersByRegistrationDate ) ),
                    page: page,
                    totalPages: data.total_pages,
                });
            });
    }

    loadMore = () => {
        const totalPages = this.state.data.total_pages;
        const currentPage = this.state.data.page;
        let nextPage  = currentPage + 1; // устанавливаем запрашиваемую страницу
        if (nextPage <= totalPages) {
            this.loadData(nextPage,6);
            if (nextPage === totalPages) this.setState({showLoadMoreBtn: false}); // если запрашивамая страница равна общему количеству страниц - скрываем кнопку "Show more"
        }
    }

    sortingUrersByRegistrationDate( a, b ) {
        return b.registration_timestamp - a.registration_timestamp;
    }

    render() {

        const {loading, usersList, showLoadMoreBtn} = this.state;

        if(loading) return <Spinner/>; // отображаем спиннер, пока не загрузятся данные

        return (
            <section id="users" className="common-section users">
                <div className="container">
                    <div className="row">
                        <div className="col-12 section-title">
                            <h2>Our cheerful users</h2>
                            <h5>Attention! Sorting users by registration date</h5>
                        </div>
                    </div>
                    <div className="row">
                        {usersList.map((user) =>
                            <UserItem key={user.id} user={ user } />
                        )}
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {showLoadMoreBtn === true ?
                                (<button onClick={this.loadMore} className='btn btn-secondary'>Show more</button>) : null}
                        </div>
                    </div>
                </div>
            </section>
        )
    }


}

export default Users;