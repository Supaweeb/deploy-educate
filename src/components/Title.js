import styled, { ThemeProvider, css } from 'styled-components'

const _Title = styled.p`
`;

const Title = (props) => {
    return (
        <_Title>
            {props.children}
        </_Title>
    )
}

export default Title