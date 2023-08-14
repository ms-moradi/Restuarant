import { members } from "@/analytics/data/data";
import CardMember from "../cardMember/cardMember";

const TeamMember =()=>{
    return(
        <div className="flex justify-center gap-6">
            {members.map(member=>(
                <div key={member.id}>
                    <CardMember picture={member.image} name={member.name} description={member.description}/>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;