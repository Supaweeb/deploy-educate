'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <header>
        <title>
          Work calculator
        </title>
      </header>
      <body>
          <p>Body Test naja</p>
          <button type="button" onClick={() => router.push('/dashboard')}>
            Dashboard
          </button>
      </body>
    </>
  )
}
