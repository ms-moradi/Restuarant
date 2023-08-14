
import CardComment from "@/component/cardComment/cardComment";
import { commentUser } from "@/analytics/data/data";
import { nunito, pacifico } from "@/analytics/font/fonts";

const Comments =()=>{
    return(
        <div className="flex flex-col flex-nowrap items-center gap-4 my-8">
            <div className="flex justify-center items-center gap-2">
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                <h5 className={`${pacifico.className} text-xl text-[#fea116] font-normal`}>Testimonial</h5>
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
            </div>
            <h className={`${nunito.className} text-[40px] font-extrabold`}>Our Clients Say!!!</h>
            <div className="flex justify-center gap-10">
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