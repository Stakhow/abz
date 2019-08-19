import React, { Component } from 'react';
import './input-item-select.sass';
import AbzService from './../../service/AbzService.js';
import Select from 'react-select'

class InputItemSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            positions : []
        };
    }

    abzApiService = new AbzService();

    componentDidMount() {
        this.abzApiService
            .getPositions('positions')
            .then(({positions}) => {
                positions.map((position) => {
                	return (
						position.selectItemId = `select-item_${position.id}`
					)
                
                });
                this.setState({
                    positions: positions
                });
            });
    }
    
    render() {
        const {positions} = this.state;
        const options = positions.map((option)=>{
            return {
                value : option.id,
                label : option.name
            };
        });
    
        const arrowRenderer = () => {
            return (
                <svg>test</svg>
            )
        }

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? '#ef6c00' : '#010000',
                backgroundColor: state.isSelected ? 'transparent' : 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(252, 131, 31, 0.2)',
                    cursor: 'pointer'
                }
            }),
            control: (provided, state) => ({
                // none of react-select's styles are passed to <Control />
                ...provided,
                display: 'flex',
                padding: '0 9px',
                border: state.isFocused ? '1px solid #b7b7b7!important' : '1px solid #b7b7b7',
                boxShadow: state.isFocused ? '0 0 1px 1px #b7b7b7' : 0,
                '&:focus': {
                    border: state.isFocused ? 0 : 0,
                    boxShadow: state.isFocused ? 0 : 0,
                }
            }),
    
            indicatorSeparator: () => false,
    
            placeholder: () => ({
                color: '#8d8c8c'
            }),
 
        }

        
        return (
            <div className="input-item input-item_select">
                <Select
                    arrowRenderer={arrowRenderer}
                    placeholder="Select your position"
                    name="position_id"
                    styles={customStyles}
                    options={options} />
            </div>
        )
    }
}

export default InputItemSelect;