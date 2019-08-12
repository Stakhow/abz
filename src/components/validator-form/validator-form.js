import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './input';
class Forms extends ValidatorForm {
    render() {
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    onChange={this.handleChange}
                    name="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <button type="submit">submit</button>
            </ValidatorForm>
        );
    }
}

export default Forms;