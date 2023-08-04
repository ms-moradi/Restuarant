import { pacifico } from '@/analytics/font/fonts'
import Image from 'next/image'
import NavBar from '@/component/navBar/navBar'

export default function Home() {
  return (
    <main >
      <NavBar/>
      <p className={`${pacifico.className}`}>Home</p>
    </main>
  )
}
