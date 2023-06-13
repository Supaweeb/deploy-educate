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

const Body = styled.body`
    display: flex;
    width: 100%;
    ${props => !!props.isClose && css`
        margin-left: -225px;
        transition: 0.3s ease-in-out;
    `}
    ${props => !props.isClose && css`
        margin-left: 0;
        transition: 0.3s ease-in-out;
    `}
`;

const Button = styled.div`
    color: #4C4C6D;
    background-color: #E8F6EF;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    margin: 0.5em;
    margin-left: 225px;
    z-index: 9999;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    * {
        font-size: 2.5em;
    }
`

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    const [isClose, setIsClose] = useState(false)

    return (
      <Body isClose={isClose}>
        <Button onClick={() => setIsClose(!isClose)}>
            <MenuIcon/>
        </Button>
        <Navbar>
            <ol>
                <li class="crumb"><a href="#">Bikes</a></li>
                <li class="crumb"><a href="#">BMX</a></li>
                <li class="crumb">Jump Bike 3000</li>
            </ol>
        </Navbar>
        {children}
      </Body>
    )
}
