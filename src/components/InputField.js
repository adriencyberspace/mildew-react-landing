import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    cursor: text;
    border: none;
    background: #E0ECC6;
    min-height: 40px;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: space-evenly;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    &:focus-visible{
        outline: none;
    }
    @media (max-width: 900px){
        width: 200px;
    }
`

const Submit = styled.input`

    cursor: pointer;
    background: #6EB0CC;
    min-height: 40px;
    width: fit-content;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: black;
    border: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    &:hover{
        background: #319686
    }
`


const InputField = props => {

    //Checks if all the fields are filled and if an @ sign is used in the email field
    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    <div></div>
    if (props.type === "submit") {
        return (

                <Submit
                    className='primaryBtn primaryBtn--big g__justify-self-center'
                    type='submit'
                    value={props.label}
                    disabled={validateInput(props.formValues)}
                />

        )
    } else if (props.type === "textarea") {
        return (
            <label className="inputField__label">
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label className="inputField__label">
                {props.label}
                <Input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    name={props.name}
                />
            </label>
        );
    }


};

export default InputField;