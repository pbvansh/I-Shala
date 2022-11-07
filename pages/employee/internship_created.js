import Link from "next/link"
import {ArrowRightIcon} from "@heroicons/react/outline"


const internship_created = () => {
  return(
    <>
      <div className="min-h-screen max-w-screen-lg mx-auto mb-32 mt-24 border rounded-lg p-8 shadow-2xl">
            <div className="max-w-screen-lg mx-auto border rounded-md p-8 bg-green-100 flex justify-evenly shadow-lg">
           <img src="https://internshala.com/static/images/common/modal_success.svg" height={100} width={100}
            className="ml-12 justify-center" />
            <div>
                <p className="text-gray-700 font-semibold text-4xl mt-6">Your internship has been posted!</p>
            </div>
            </div>
            <div className="flex mt-20 space-x-3 ml-[650px]">
                <Link href="/employee/dashboard">
                <button className="text-sky-500  hover:text-sky-600  hover:border-sky-600 font-semibold text-xl">
                  Go To Internship dashboard</button>
                </Link>
                <ArrowRightIcon className="text-sky-500 hover:text-sky-600 h-5 w-5 mt-2" />
            </div>

            <div>
             <img src="https://careerheight.in/wp-content/uploads/2021/08/join-our-team-concept_25147-48-1-8.webp"
              height={600} width={600} className="ml-44 mt-20 "/>
             </div>
        </div>
    </>
  )
}

export default internship_created