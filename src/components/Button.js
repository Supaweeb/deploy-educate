import { Button } from '@mui/material';

import styled, { ThemeProvider, css } from 'styled-components'

const ButtonComponent = styled(Button)`
    min-width: 6em;
    min-height: 3em;
    font-size: 1em;

    ${props => props.success && css`
        color: #ffffff;
        background-color: #408E91;
        &:hover {
            background-color: #116A7B;
        }
    `}

    ${props => props.danger && css`
        color: #ffffff;
        background-color: #ED2B2A;
        &:hover {
            background-color: #D21312;
        }
    `}

    ${props => props.warning && css`
        color: #ffffff;
        background-color: #F2BE22;
        &:hover {
            background-color: #F29727;
        }
    `}
`;

const _Button = (props) => {
    return (
        <>
            <ButtonComponent {...props}>
                {props?.children}
            </ButtonComponent>
        </>
    )
}

export default _Button