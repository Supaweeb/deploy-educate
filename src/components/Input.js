import TextField from '@mui/material/TextField';

import styled, { ThemeProvider, css } from 'styled-components'

const InputComponent = styled(TextField)`
    background-color: #ffffff;
    border-radius: 4px;

    &:focus {
        border-color: #116A7B;
    }
    
    &:hover {
        border-color: #116A7B;
    }
`;

const _Input = (props) => {
    return (
        <>
            <InputComponent {...props}/>
        </>
    )
}

export default _Input