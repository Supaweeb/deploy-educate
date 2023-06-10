'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <body>
          <p>Dashboard</p>
          <button type="button" onClick={() => router.push('/dashboard')}>
            Dashboard
          </button>
      </body>
    </>
  )
}
