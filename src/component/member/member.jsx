
import { members } from "../../analytics/data/data";
import CardMember from "../cardMember/cardMember";


const Member =()=>{
    return( 
        <div className="max-w-full h-auto flex flex-wrap  justify-center gap-6 my-10 ">
            {members.map(member=>(
                <div key={member.id} className="">
                    <CardMember picture={member.image} name={member.name} description={member.description}/>
                </div>
            ))}
        </div>
    )
}

export default Member;