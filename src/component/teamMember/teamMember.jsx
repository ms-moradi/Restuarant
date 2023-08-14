import { members } from "@/analytics/data/data";
import CardMember from "../cardMember/cardMember";

const TeamMember =()=>{
    return(
        <div>
            {members.map(member=>(
                <div key={member.id}>
                    <CardMember/>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;