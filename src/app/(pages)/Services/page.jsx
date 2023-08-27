
import Title from "../../../component/title/title";
import Service from "../../../component/service/service";


const Services =()=>{
    return(
        <div className="mt-[130px] flex flex-col items-center justify-center">
            <Title title={'Our Services'} header={'Explore Our Services'}/>
            <div className="my-5">
                <Service/>
                <Service/>
            </div>
        </div>
    )
}

export default Services;