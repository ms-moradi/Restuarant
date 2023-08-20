import Title from "@/component/title/title";
import Member from "@/component/member/member";

const Team =()=>{
    return(
        <div className="flex flex-col items-center justify-center my-10" >
            <Title title={'Team Members'} header={'Our Master Chefs'}/>
            <Member/>
            <Member/>
        </div>
    )
}

export default Team;