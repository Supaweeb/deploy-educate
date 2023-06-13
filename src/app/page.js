'use client'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'

import Input from '../components/Input'
import Button from '../components/Button'

import httpClient from '../helper/httpClient'

const Background =styled.div`
  background-color: #1B9C85;
  height: 100vh;
`;

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 50vw;
  position: relative;
  float: right;
`;

const Component = styled.div`
  height: 100vh;
  width: 50vw;
  // text-align: center;
  position: relative;
  
  * {
    margin: 0;
  }
`;

const Login = styled.div`
  background-color: #E8F6EF;
  width: 30em;
  height: 15em;
  border-radius: 6px;
  text-align: center;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > * {
    width: 100%;
    margin: 1em 0;
  }
`

const Title = styled.p`
  margin: 0;
  text-align: start;
  position: absolute;
  margin-top: -1.75em;
  font-size: 2em;
  text-shadow: -0.25px 0 #000000, 0 0.25px #000000, 0.25px 0 #000000, 0 -0.25px #000000;

  color: #1B9C85;
`

export default function Home() {
  const router = useRouter()

  const [isError, setIsError] = useState(false)

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlerOnLogin = (e) => {
    e.preventDefault()

    httpClient.post('/user/login', {
      username,
      password
    }).then(({ data }) => {
      setIsError(false)
      return Swal.fire({
        title: 'Login successful',
        text: '',
        icon: 'success',
      })
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard')
      }
    }).catch((err) => {
      console.log('err ', err)
      setIsError(true)
      Swal.fire({
        title: 'Login fail',
        text: `Error : ${err.message}`,
        icon: 'error',
      })
    })
  }

  return (
    <Background>
      <Container>
        <Component>
          <Login>
            <Title>Work time</Title>
            <Input
              id="outlined-required username"
              label="Username"
              onClick={() => isError && setUsername('')}
              onChange={(e) => setUsername(e.target.value)}
              error={isError}
              value={username}
            />
            <Input
              id="outlined-required password"
              label="Password"
              type="password"
              onClick={() => isError && setPassword('')}
              onChange={(e) => setPassword(e.target.value)}
              error={isError}
              value={password}
            />
            <Button onClick={handlerOnLogin}>Login</Button>
          </Login>
        </Component>
      </Container>
    </Background>
  )
}
