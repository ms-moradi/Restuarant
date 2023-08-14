import Banner from '@/component/banner/banner';
import Service from '@/component/service/service';
import Welcome from '@/component/welcome/welcome';
import FoodMenu from '@/component/foodMenu/foodMenu';
import BookTable from '@/component/bookTable/bookTable';
import TeamMember from '@/component/teamMember/teamMember';
import Comments from '@/component/comments/comments';

export default function Home() {

  return (
    <>
      <Banner/>
      <Service/>
      <Welcome/>
      <FoodMenu/>
      {/* <BookTable/> */}
      <TeamMember/>
      <Comments/>
    </>
  )
}
