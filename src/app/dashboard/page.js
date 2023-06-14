'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div style={{ display: "block", margin: "1em" }}>
          <p>Dashboard</p>
          <button type="button" onClick={() => router.push('/dashboard')}>
            Dashboard
          </button>
      </div>
    </>
  )
}
