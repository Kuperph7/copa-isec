import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className='text-9xl'>COPA ISEC</h1>
      <h3 className='text-5xl'>Próximamente</h3>
      <Link className='mt-20 border border-solid py-3 px-5 ease-in duration-300 bg-yellow-400 hover:bg-yellow-200' href='/secretPage'>Click aquí</Link>
    </main>
  )
}
