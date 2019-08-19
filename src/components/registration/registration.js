import React, { Component } from 'react';
import './registration.sass';
import InputItemSelect from "../input-item-select/input-item-select";
import InputItem from "../input-item/input-item";
import BtnPrimary from "../btn-primary/btn-primary";
import AbzService from './../../service/AbzService.js';
import Spinner from "../spinner/spinner";


const inputsData = {
    name: {req: true, type: "text", name: "name", id: "input-name", placeholder: 'Your name', label: 'Name' },
    email: {req: true, type: "email", name: "email", id: "input-email", placeholder: 'Your email', label: 'Email' },
    phone: {req: true, type: "tel", name: "phone", id: "input-phone", placeholder: "+38 (0__) ___ __ __", label: 'Phone' },
    photo: {req: true, type: "file", name: "photo", id: "input-photo", placeholder: "Upload your photo", label: 'Upload' },
};

/**
 * Возвращаем объект, в котором указаны поля, обязательны для заполнения;
 * значения ключей инвертируем для дальнейшего удобного использования в state, т.е.
 * состояние валидации конкретного поля выставляется в значение "false", которое будет изменятся
 * в зависимости прошло поле валидацию или нет;
 *
 * @param {object} obj = входящий объект;
 * @return {object} newObj = возврящаемый объект, в котором ключ - имя поля,
 * значение - true/false, в зависимости от входных данных;
 */
const getRequireFields = (obj = {}) => {
    const newObj = {};
    Object.keys(obj).map(item => { return  newObj[item] = !obj[item].req });
    return newObj;
};

/**
 * Проверка всех полей на валидацию, если одно хотя-бы одно значение объекта === false,
 * то валидация не пройдена, возваращаем значение "false";
 * @param {object} obj = входящий объект;
 * @return {boolean}
 */
const validated = (obj = {} ) => {
    const result = Object.values(obj).find((val)=>{ return val===false });
    if ( !(Object.keys(obj).length === 0 && obj.constructor === Object) ) { // проверка объекта на пустоту
        return result !== false;
    } else return false;
};

class Registration extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            token: '',
            loading: false,
            requireFields: {},
            validated: false,
            serverResponse: { statusCode: false, statusText: 'Processing', fails: "" },
        };
        
        this.formHandle = this.formHandle.bind(this);
        // this.formOnFocus = this.formOnFocus.bind(this);
        this.checkFields = this.checkFields.bind(this);
    }

    abzApiService = new AbzService();
    
    componentDidMount() {
        this.abzApiService.getToken()
            .then( (data) => {
                this.setState(({token}) => {
                    return {
                        token: data.token
                    }
                });
            });
        
        this.setState({ requireFields: getRequireFields(inputsData) });
        
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
    };
    
    /**
     * Записываем в state результат валидации поля
     * @param {string} key = имя поля которое проходит валидацию
     * @param {boolean} val = значения валидации этого поля
     */
    checkFields = (key="", val=false) => {
        const requireFields = this.state.requireFields;
        requireFields[key] = val;
        this.setState( {
            requireFields: requireFields,
            validated: validated(requireFields)
        });
        
    };
    
    /**
     * Обработка формы перед отправкой и отправка на сервер
     * @param {object} e = собитие формы
     */
    formHandle (e) {
        e.preventDefault();
        // const inputsName = Object.keys(inputsData);
        this.setState(({loading}) => {return { loading: !loading }});
        const token = this.state.token;
        const data = new FormData( e.target );
        
        data.get('name');
        data.get('email');
        const phone = data.get('phone').replace(/\s|-|\(|\)/gi,''); // Очищение ном.телефона от пробелов, скобок, дефисов;
        data.append('phone', phone);
        data.get('position_id');
        data.get('photo');
        const serverRes = {};
        
        if (this.state.validated !== true) return;
        
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: data,
            headers: {
                'Token': token, // get token with GET api/v1/token method
            },
        }).then(function(response) {
            serverRes.statusCode = response.status;
            serverRes.statusText = response.statusText;
            console.log('response  ', response );
    
            switch (serverRes.statusCode) {
                case 201 :
                    serverRes.statusText = "New user successfully registered";
                    break;
                case 401 :
                    serverRes.statusText = "The token expired.";
                    break;
                case 409 :
                    serverRes.statusText = "User with this phone or email already exist";
                    break;
                case 422 :
                    // serverRes.statusText = response.statusText;
                    break;
                default: break;
            }
            return response.json();
        }).then(function(data) {
            if(data.success) {
                // process success response
                console.log('process success response');
            } else {
                // process server errors
                console.log('process server errors');
                serverRes.fails = data.fails;
            }
            console.log(data);
        }).catch(function(error) {
            // process network errors
            console.log('process network errors', error);
        }).finally(() => {
            this.setState(({loading}) => {
                return {
                    loading: !loading,
                    serverResponse : serverRes
                }
            });
            setTimeout(() => {
                this.setState({
                    serverResponse: {
                        statusCode : false
                    }
                });
            }, 4000);
            console.log('resp', this.state.serverResponse);
            console.log(this.state);
            console.log('serverRes', serverRes);
        });
    }
    
    // formOnFocus () {
    //     const  { serverResponse : { status } } = this.state;
    //     if (status !== false) {
    //         this.setState({
    //             serverResponse : {
    //                 status : false,
    //             }
    //         });
    //     }
    // }
    
    render() {

        const { loading } = this.state;
        
        /* Сообщение с сервера */
        const ServerResponseMsg = () => {
            const { serverResponse: {statusCode, statusText} } = this.state;
            const resultClass = statusCode !== 201 ? 'alert-error' : ' alert-success'; // присваеваем клас соответсвенно ответу сервера
            if (statusCode === false) return false; // если нет ответа, сообщение не отображается
            return (
                <div className={`alert py-2 ${resultClass}`}>{statusText}</div>
            )
        }
        
        return (
            <section id="registration" className="registration">
                <div className="container">
                    <div className="row">
                        <div className="col-12 section-title">
                            <h2>Register to get a work</h2>
                            <h5>Attention! After successful registration and alert, update the list of users in the block from the top</h5>
                        </div>
                    </div>
                    <form onSubmit={this.formHandle}>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <InputItem inputsData={inputsData.name} checkFields={this.checkFields}/>
                            </div>
                            <div className="col-md-4">
                                <InputItem inputsData={inputsData.email} checkFields={this.checkFields}/>
                            </div>
                            <div className="col-md-4">
                                <InputItem inputsData={inputsData.phone} checkFields={this.checkFields}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <InputItemSelect />
                            </div>
                            <div className="col-md-6">
                                <InputItem inputsData={inputsData.photo} checkFields={this.checkFields}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                {loading === true ? (<Spinner/>) : (<BtnPrimary onSubmitBtnClick={this.onSubmitBtnClick} value='submit' text="Sign Up" disabled={!this.state.validated}/>)}
                            </div>
                        </div>
                    </form>
                    
                    <ServerResponseMsg/>
                </div>
            </section>
        )
    }
}

export default Registration;