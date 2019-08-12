import React, {Component, PropTypes,} from  'react';
import './app.sass';
import { connect } from 'react-redux';


import Header from './components/header/header';
import Banner from "./components/banner/banner";
import AboutMe from "./components/about-me/about-me";
import Relationships from "./components/relationships/relationships";
import Requirements from "./components/requirements/requirements";
import Users from "./components/users/users";
import Registration from "./components/registration/registration";
import Footer from "./components/footer/footer";

class App extends Component {
    
   
    render() {
        console.log('this.props.testStore', this.props.testStore);
        return (
            <div>
                <Header/>
                <Banner/>
                <section className="common-section">
                    <AboutMe/>
                    <Relationships/>
                </section>
                <Requirements/>
                <Users/>
                <Registration/>
                <Footer/>
            </div>
        )
    }
    
}


export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);