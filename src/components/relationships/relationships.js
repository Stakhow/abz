import React from 'react';
import './relationships.sass';
import { connect } from 'react-redux';

const Relationships = ({props}) => {
    
    const {title, relationshipsItem } = props;
    
    const RelationshipsItem = () => {
        return (
            relationshipsItem.map( (item, idx) => {
                const Content = () => { return item.content.map( (item, idx) => { return <p key={idx}>{item}</p> }) };
                return (
                    <div key={idx} className="col-lg-4 relationships__item">
                        <img src={`media/img/${item.img}`} alt="html"/>
                        <h3>{item.title}</h3>
                        <Content/>
                    </div>
                )
            })
        )
    };
    
    return (
        <section id="relationships" className="relationships">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <RelationshipsItem/>
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        props: state.relationships
    }
}

export default connect(mapStateToProps)(Relationships);