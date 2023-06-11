'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  const fetchData = () => {
    axios.get(process.env.API_URL_BACKEND).then(({ data }) => {
      console.log(data)
    }).catch((err) => {
      console.log('err ', err)
    })
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
      <header>
        <title>
          Work calculator
        </title>
      </header>
      <body>
          <p>Body Test naja</p>
          <button type="button" onClick={() => fetchData()}>
            Dashboard
          </button>
      </body>
    </>
  )
}
