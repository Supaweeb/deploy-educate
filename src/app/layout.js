import { Inter } from 'next/font/google'
import styled from 'styled-components';
import { usePathname  } from "next/navigation";

import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

const Body = styled.body`
  margin: 0;
`;

export default function RootLayout({ children }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <html lang="en">
        <Body className={inter.className}>
          {children}
        </Body>
      </html>
    )
  }

  return (
    <html lang="en">
      <Body className={inter.className} style={{ display: "inline-flex" }}>
        <Sidebar/>
        {children}
      </Body>
    </html>
  )
}
