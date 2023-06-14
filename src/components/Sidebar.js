'use client'

import { useEffect, useState } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = styled.nav`
    background-color: #1B9C85;
    height: 100vh;
    width: 300px;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    clear: both;

    position: relative;
`;

const Button = styled.div`
    color: #4C4C6D;
    background-color: #E8F6EF;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    margin-top: 1em;

    ${props => !!props.isClose && css`
        margin-left: 40px;
        transition: 1s ease-in-out;
    `}

    ${props => !props.isClose && css`
        margin-left: 280px;
        transition: 1s ease-in-out;
    `}

    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    * {
        font-size: 2.5em;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    overflow: hidden;

    ${props => !!props.isClose && css`
        margin-left: -180px;
        transition: 1s ease-in-out;
    `}

    ${props => !props.isClose && css`
        margin-left: 0;
        transition: 1s ease-in-out;
    `}
`;

const Profile = styled.div`
    margin-top: 2em;
    text-align: center;

    .title {
        font-size: 2.5em;
        margin: 0;
    }

    img {
        width: 250px;
        height: 250px;

        ${props => !!props.isClose && css`
            margin-left: -200px;
            transition: 1s ease-in-out;
        `}

        ${props => !props.isClose && css`
            margin-left: 0;
            transition: 1s ease-in-out;
        `}
    }
`

const Sidebar = (props) => {
    const [isClose, setIsClose] = useState(true)

    return (
        <>
            <Button onClick={() => setIsClose(!isClose)} isClose={isClose}>
                <MenuIcon/>
            </Button>
            <Container isClose={isClose}>
                <Navbar>
                    <Profile isClose={isClose}>
                        <p className='title'>Profile</p>
                        {/* <img src="/logo.png" alt=""/> */}
                        <p>Tar eng kub</p>
                    </Profile>
                    <ol>
                        <li class="crumb"><a href="#">Bikes</a></li>
                        <li class="crumb"><a href="#">BMX</a></li>
                        <li class="crumb">Jump Bike 3000</li>
                    </ol>
                </Navbar>
            </Container>
        </>
        
    )
}


export default Sidebar
