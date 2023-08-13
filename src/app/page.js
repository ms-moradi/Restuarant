import Banner from '@/component/banner/banner';
import Service from '@/component/service/service';
import Welcome from '@/component/welcome/welcome';
import FoodMenu from '@/component/foodMenu/foodMenu';


export default function Home() {

  return (
    <>
      <Banner/>
      <Service/>
      <Welcome/>
      <FoodMenu/>
    </>
  )
}
