
import CardComment from "@/component/cardComment/cardComment";
import Title from "../title/title";
import { commentUser } from "@/analytics/data/data";


const Comments =()=>{
    return(
        <div className="w-full overflow-x-scroll flex flex-col flex-nowrap items-center gap-4 my-20">
            <Title title={'Testimonial'} header={'Our Clients Say!!!'}/>
            <div>
                    {commentUser.map(comment=>(
                        <div key={comment.id}>
                            <CardComment name={comment.name} image={comment.image} comment={comment.comment} profession={comment.profession}/>
                        </div>
                    ))}
              </div>
        </div>
    )
}

export default Comments;