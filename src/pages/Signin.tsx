import { Checkbox } from "../components/Checkbox";
import { FormEvent, useState } from "react";
import axios from 'axios';
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import background from "../styles/background.jpg";

export function Signin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

 async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'pedrohveloso@hotmail.com',
      password: '7532159',
    })

    setIsUserSignedIn(true)
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }} className='w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center mr-[300px] mb-10'>
        <Logo />

        <Heading size='2xl' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='2xl' className='text-gray-200 mt-1'>
          Faça login e comece a usar!
        </Text>
        
      </header>
      <div className="flex flex-col">
        <div className='flex flex-col justify-center pt-0 pb-6 px-[50px] bg-gray-900 rounded-md'>
          <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
            { isUserSignedIn && <Text>Login realizado!</Text> }

            <label htmlFor="email" className='flex flex-col gap-3'>
              <Text  className='font-semibold'>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>

                <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
              </TextInput.Root>
            </label>

            <label htmlFor="password" className='flex flex-col gap-3'>
              <Text  className='font-semibold'>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>

                <TextInput.Input type='password' id='password' placeholder='******' />
              </TextInput.Root>
            </label>

            <label htmlFor="remember" className='flex items-center gap-2'>
              <Checkbox id='remember' />
              <Text size='md' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
            </label>

            <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
          </form>

          <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild size='md'>
              <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>
            <Text asChild size='md'>
              <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
            </Text>
          </footer>
        </div>
        <Text size='2xl' className='flex justify-center text-gray-100 mt-3 gap-1'>
          Feito com 💜 pela <a className="hover:text-violet-500" target="_blank" href="https://rocketseat.com.br">Rocketseat</a> 
        </Text>
      </div>
    </div>
  )
}