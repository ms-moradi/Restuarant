import { pacifico } from '@/analytics/font/fonts'
import Image from 'next/image'
import MenuBar from '@/component/manuBar/menuBar' 


export default function Home() {
  return (
    <main >
      <MenuBar/>
      <p className={`${pacifico.className}`}>Home</p>
    </main>
  )
}
