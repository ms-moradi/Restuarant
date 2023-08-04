import { pacifico } from '@/analytics/font/fonts'
import Image from 'next/image'
import NavBar from '@/component/navBar/navBar'
import MenuBar from '@/component/manuBar/menuBar'

export default function Home() {
  return (
    <main >
      <NavBar/>
      <p className={`${pacifico.className}`}>Home</p>
    </main>
  )
}
