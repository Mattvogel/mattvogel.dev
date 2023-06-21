import StaticFooter from '@/components/footer'
import { Rock_Salt } from 'next/font/google'

const rock = Rock_Salt({
  weight: '400',
  variable: '--font-rock',
  subsets: ['latin']
})

export default function Home() {


  return (
    <>
    <main className="static min-h-screen flex-col items-center justify-between">
      <div className='absolute bottom-20 left-20'>
        <h1 className={`mb-4 text-4xl font-extrabold leading-non tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white select-none font-rock ${rock.variable}`}>Matthew Vogel</h1>
      </div>
    </main>
    <StaticFooter/>
    </>
  )
}
