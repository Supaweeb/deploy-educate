'use client'

import { useRouter } from 'next/navigation'
import styled, { ThemeProvider, css } from 'styled-components'

const Container = styled.div`
  float: right;
  width: 100%;
  padding: 0 2em;
`

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div style={{ display: "block", margin: "1em" }}>
          <p>Dashboard</p>
          <button type="button" onClick={() => router.push('/')}>
            Dashboard
          </button>
      </div>
    </>
  )
}
