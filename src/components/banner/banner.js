import React from 'react';
import './banner.sass';

// import bg_image from '../../media/img/bg-1-min.jpg'
import BtnPrimary from "../btn-primary/btn-primary";
import { connect } from 'react-redux';


const Banner = ({props}) => {
    const { title, content, button, bgImage } = props;
    const bg_image = `media/img/${bgImage}`;
    // const bg_image = `${base}${bgImage}`;
    const style = {
        backgroundImage: `url( ${bg_image} )`,
    };

    const Content = () => { return content.map( (item, idx) => { return <p key={idx}>{item}</p> }) };

    return (
        <section className="common-section banner" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1>{title}</h1>
                            <Content/>
                            <BtnPrimary {...button}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        props: state.banner
    }
}

export default connect(mapStateToProps)(Banner);