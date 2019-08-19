import React from 'react';
import './requirements.sass';
import { connect } from 'react-redux';

const Requirements = ({props}) => {
    const {title, content, bgImage, image } = props;
    const bg_image = `media/img/${bgImage}`;
    const style = {
        backgroundImage: `url(${bg_image})`,
    };
    const Content = () => { return content.map( (item, idx) => { return <p key={idx}>{item}</p> }) };

    return (
        <section id="requirements" style={style} className="common-section requirements">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Content/>
                    </div>
                    <div className="col-lg-6">
                        <img src={ `media/img/${image}`} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        props: state.requirements
    }
}

export default connect(mapStateToProps)(Requirements);