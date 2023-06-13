'use client'

import { Inter } from 'next/font/google'
import styled from 'styled-components';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

const Body = styled.body`
`;

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Body className={inter.className}>{children}</Body>
      </html>
    </>
  )
}
