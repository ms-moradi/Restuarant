
import { pacifico } from '@/analytics/font/fonts';
import Image from 'next/image';
import Header from '@/component/header/header';
import Banner from '@/component/banner/banner';


export default function Home() {

  return (
    <main >
      <Header/>
      <Banner/>
      <p className={`${pacifico.className}`}>Home</p>
    </main>
  )
}
