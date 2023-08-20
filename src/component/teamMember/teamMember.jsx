import Title from "../title/title";
import Member from "../member/member";

const TeamMember =()=>{
    return(
        <div className="flex flex-col items-center gap-2 my-20">
            <Title title={'Team Member'} header={'Our Master Chefs'}/>
            <Member/>
        </div>
    )
}

export default TeamMember;