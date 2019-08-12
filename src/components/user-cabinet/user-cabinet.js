import React, {Component} from 'react';
import './user-cabinet.sass';
import {ReactComponent as SignOut}  from "../../media/icons/sign-out.svg";
import AbzService from './../../service/AbzService.js'
import Spinner from "../spinner/spinner";



class UserCabinet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            loggedIn: true,
            loading: true
        }
        this.logOut = this.logOut.bind(this);
    }
    abzApiService = new AbzService();
    componentDidMount() {
        this.abzApiService.getUser(1).then( (body)=>{
            const {user} = body;
            this.setState({user: user, loading: false});
        } );
        
    }
    componentDidUpdate(){
    }
    
    logOut(){
        this.setState( ({loggedIn}) => {
            return {
                loggedIn: !loggedIn
            }
        } );
    }
    
    render () {
        const SingIn = () => {
            return (
                <div className="d-flex justify-content-end">
                    <a href="#">Sign in</a>
                </div>
            )
        }
        const {loggedIn, loading} = this.state;
        const { email, id, name, phone, photo, position, position_id, } = this.state.user;
        return (
            loggedIn === true ?
                loading === true ?
                    <Spinner/>
                    :
                    <div className="user-cabinet d-flex">
                        <div className="user-cabinet__info">
                            <h5>{name}</h5>
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                        <div className="user-cabinet__img">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="user-cabinet__link">
                            <a href="javascript:void(0)" className="sign-out">
                                <SignOut onClick={this.logOut}/>
                            </a>
                        </div>
                    </div>
            :
                <SingIn/>
        )
    
    }
}

export default UserCabinet;