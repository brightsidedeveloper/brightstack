import { createLazyFileRoute } from '@tanstack/react-router'
import useBrightSide from '../temp/src/hooks/useBrightSide'
import { useEffect } from 'react'
import { useNativeListener } from '../temp/src'
import { z } from 'zod'

export const Route = createLazyFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  const brightside = useBrightSide()

  useEffect(() => {
    brightside.native.postToNative('test', { woah: 'cool' })
  }, [brightside])

  useNativeListener(
    'test',
    (data) => {
      console.log(data)
    },
    z.object({ woah: z.any() })
  )

  return (
    <main className="h-dvh  gap-3 flex flex-col p-10 text-left">
      <h2 className="text-4xl font-medium -mb-2">BrightSide's</h2>
      <h1 className="text-5xl font-bold">BrightStack!</h1>
      <p className="max-w-96 font-light">A full-stack TypeScript framework for building modern Native & Web applications.</p>
      <button className="bg-primary rounded-md py-2 px-3 ml-auto w-fit">Link to Docs!</button>
      <img src="/Bright.svg" alt="BrightStack Hero" className="w-[80%] m-auto rounded-3xl" />
    </main>
  )
}
