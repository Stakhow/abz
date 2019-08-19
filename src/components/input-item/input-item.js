import React, {Component} from 'react';
import './input-item.sass';
import validator from 'validator';
import NumberFormat from "react-number-format";

class InputItem extends Component {
    constructor(props){
        super(props);
        this.state= {
            error : null,
            errMessage: null,
            uploadFileName: '',
        };
        this.loadFile = this.loadFile.bind(this);
        this.validation = this.validation.bind(this);
    }
    
    validation = e => {
        const { name, value } = e.target;
        const rules = {}, message={};
        
        let errMessage;
        switch (name) {
            case 'name':
                rules.requireField = !validator.isEmpty(value);
                rules.string = validator.isAlpha(value);
                rules.length =  validator.isLength(value, {min: 2, max: 60});
            
                message.string = 'Only string';
                message.requireField = 'Field is required';
                message.length = "The name must be at least 2 characters.";
                break;
        
            case 'email':
                rules.requireField = !validator.isEmpty(value);
                rules.email = validator.isEmail(value);
            
                message.requireField = 'Field is required';
                message.email = 'The email must be a valid email address.';
                break;
        
            case 'phone':
                rules.requireField = !validator.isEmpty(value);
            
                message.requireField = 'The phone field is required';
                break;
        
            case 'photo':
                rules.requireField = !validator.isEmpty(value);
                message.requireField = 'Field is required';
                break;
                // The position id must be an integer
            default :
               return
        }
    
        let key =  Object.keys(rules).filter((key) => rules[key] === false);
        
        if (key !== undefined || key !== null) {
            key = key.length > 1 ? key[0] : key;
            errMessage = message[key];
        
        }
        if( rules[key] === false ) {
            this.setState({error: true, errMessage: errMessage});
            this.props.checkFields(name, false);
            
        } else {
            this.setState({error: false, errMessage: null});
            this.props.checkFields(name, true);
        }
    }
    
    
    /* Записываем имя файла в текстовый инпут, изменяя state*/
    loadFile(e){
        const fileName = e.target.value;
        const filenameExtracted = this.extractFileName(fileName);
        this.setState({uploadFileName: filenameExtracted !== "" ? filenameExtracted : '' });
    }
    
    /* Отделяем имя файла от путей */
    extractFileName(fileName){
        const startIndex = (fileName.indexOf('\\') >= 0 ? fileName.lastIndexOf('\\') : fileName.lastIndexOf('/'));
        let filenameExtracted = fileName.substring(startIndex);
        if (filenameExtracted.indexOf('\\') === 0 || filenameExtracted.indexOf('/') === 0) {
            return filenameExtracted.substring(1);
        }
        return '';
    }
    
    render(){
        const { id, name, type, label, placeholder } = this.props.inputsData;
        const {error, errMessage} = this.state;
        const style = error === null ? '' : error === true ? 'error-input' : 'success-input';
        
        if (name === 'name' || name === 'email' ) {
            return (
                <div className={`input-item ${style}`}>
                    <label htmlFor={id} className="label">{label}</label>
                    <input
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onBlur={this.validation}
                        onChange={this.validation} />
                    {error === true ? (<label htmlFor={id} className="error">{errMessage}</label>) : null}
                </div>
            )
        }
        else if (name === 'phone' ) {
            return (
                <div className={`input-item ${style}`}>
                    <label htmlFor={id} className="label">{label}</label>
                    <NumberFormat
                        type={'tel'}
                        name={name}
                        isNumericString={true}
                        format="+38 (0##) ###-##-##"
                        mask="_"
                        placeholder={placeholder}
                        onBlur={this.validation}
                        onChange={this.validation}/>
                    {error === true ? (<label htmlFor={id} className="error">{errMessage}</label>) : null}
                </div>
            )
        }
        else if (name === 'photo' ) {
            const { uploadFileName } = this.state;
            return (
                <div className={`input-item input-item_file ${style}`}>
                    <label htmlFor={id} className="btn btn-upload">{label}</label>
                    <input
                        onChange={this.loadFile}
                        name={name}
                        type={type}
                        id={id}
                        accept="image/jpg,image/jpeg"
                        onBlur={this.validation}
                        onInput={this.validation}/>
                    <span className="input-item_file-helper">{uploadFileName === '' ? 'Upload your photo' : uploadFileName}</span>
                    {error === true ? (<label htmlFor={id} className="error">{errMessage}</label>) : null}
                </div>
            )
        }
    }
}

export default InputItem;