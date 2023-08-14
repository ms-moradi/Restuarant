import { members } from "@/analytics/data/data";
import CardMember from "../cardMember/cardMember";
import{ pacifico, nunito } from "@/analytics/font/fonts";

const TeamMember =()=>{
    return(
        <div className="flex flex-col items-center gap-2 mb-4">
            <div className="flex justify-center items-center gap-2">
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                <h5 className={`${pacifico.className} text-xl text-[#fea116] font-normal`}>Team Member</h5>
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
            </div>
            <h1 className={`${nunito.className} text-[40px] font-extrabold`}>Our Master Chefs</h1>
            <div className="flex justify-center gap-6 my-10">
            {members.map(member=>(
                <div key={member.id}>
                    <CardMember picture={member.image} name={member.name} description={member.description}/>
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default TeamMember;