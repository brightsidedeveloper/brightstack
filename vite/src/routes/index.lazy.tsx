import { createLazyFileRoute } from '@tanstack/react-router'
import { useBrightSide } from 'brightside-web'
import { useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  const [token, setToken] = useState<string | null>(null)
  const brightside = useBrightSide()

  return (
    <main className="h-dvh  gap-3 flex flex-col p-10 text-left">
      <h2 className="text-4xl font-medium -mb-2">BrightSide's</h2>
      <h1 className="text-5xl font-bold">BrightStack!</h1>
      <p className="max-w-96 font-light">A full-stack TypeScript framework for building modern Native & Web applications.</p>
      <button
        onClick={async () => {
          const { token } = await brightside.push.getPushToken()
          alert('Registered for notifications! ' + token)
          setToken(token)
        }}
        className="bg-primary rounded-md py-2 px-3 ml-auto w-fit"
      >
        Register Notifications!
      </button>
      {token}
      <img src="/Bright.svg" alt="BrightStack Hero" className="w-[80%] m-auto rounded-3xl" />
    </main>
  )
}
