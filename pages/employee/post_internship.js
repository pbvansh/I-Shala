import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon, ArrowRightIcon } from "@heroicons/react/outline"
import axios from "axios";
import Link from "next/link"
import { useRef, useState } from "react";
import JWT from 'jsonwebtoken'
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Post_internship = () => {

    const [type,setType] = useState(null);
    const nameRef = useRef();
    const locationRef = useRef();
    const noofOpeningsRef = useRef();
    const startRef = useRef();
    const durationRef = useRef();
    const responsibilityRef = useRef();
    const aboutInternshipRef = useRef();
    const stipendRef = useRef();
    const perksRef = useRef();
    const skillsRef = useRef();
    const addinfoRef = useRef();
    const whoRef = useRef();
    const formRef = useRef();
    const route = useRouter()
    const createInternship = (e) => {
        e.preventDefault();
        const token = JWT.decode(localStorage.getItem('i_shala_token'))
        axios.post("http://localhost:5000/internship/create", {
            company_id: token.id,
            Internship_Name: nameRef.current.value,
            Internship_type: type,
            Location: locationRef.current.value,
            Duration: durationRef.current.value,
            start_date: startRef.current.value,
            Stipend: stipendRef.current.value,
            RequiredSkills: skillsRef.current.value,
            whocanapply: whoRef.current.value,
            perks: perksRef.current.value,
            About_internship: aboutInternshipRef.current.value,
            Additional_information: addinfoRef.current.value,
            NoOfOpening: noofOpeningsRef.current.value
        }).then((res) => {
            route.push("/employee/internship_created")
        })
        console.log(type);
        formRef.current.reset()
    }



    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto relative justify-center">
                <Header title={'Post Internship'}/>
                <div className="flex space-x-40 justify-center p-20">
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/employee/personal_details">
                            <UsersIcon className="h-12 w-12 cursor-pointer p-3 bg-sky-500 text-white rounded-full" />
                        </Link>
                        <p>Personal Details</p>
                    </div>
                    <span className="h-1 w-[245px] bg-sky-500 absolute top-[100px] left-[22px] ml-14"></span>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/employee/organization_details">
                            <DocumentDuplicateIcon className="h-12 w-12 cursor-pointer p-3 bg-sky-500 border border-2px border-sky-500 text-white rounded-full" />
                        </Link>
                        <p>Organization Details</p>
                    </div>
                    <span className="h-1 w-[245px] bg-sky-500 absolute top-[100px] left-[310px] ml-14"></span>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                        <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3 border border-sky-500 text-sky-500 bg-white rounded-full" />
                        <p>Post Internship</p>

                    </div>
                </div>
                <form ref={formRef}>
                    <div className="text-gray-800 font-semibold text-2xl text-center mt-2">
                        <p>Post Internship</p>

                    </div>
                    <p className="text-gray-700 font-semibold text-lg  ml-40 mt-4">Internship details</p>
                    <div className="border rounded-md border-gray-300 max-w-xl mx-auto p-5 space-y-3 mt-2 text-gray-700 font-semibold">
                        <div className="space-y-1">
                            <lable>Profile(Internship name)</lable>
                            <input type="text" ref={nameRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                        </div>

                        <div className="space-y-1">
                            <lable>Internship type</lable>
                            {/* <input type="text" ref={typeRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input> */}
                        </div>

                        <div className="text-gray-700 flex space-x-10 border border-gray-300 p-2 rounded-md text-center">
                            <div className="space-x-1">
                                <input type="radio" name="type" value="work_from_home" onChange={(e)=>setType(e.target.value)}/>
                                <lable>work from home</lable>
                            </div>
                            <div className="space-x-1">
                                <input type="radio" name="type" value="In-office"  onChange={(e)=>setType(e.target.value)}/>
                                <lable>In-office</lable>
                            </div>
                            <div className="space-x-1">
                                <input type="radio" name="type" value="part-time"  onChange={(e)=>setType(e.target.value)}/>
                                <lable>part-time</lable>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <lable>City/Cities</lable>
                            <input type="text" ref={locationRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                        </div>

                        <div className="space-y-1">
                            <lable>Number of openings</lable>
                            <input type="text" ref={noofOpeningsRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                        </div>

                        <div className="space-y-1">
                            <lable>Internship start date</lable>
                            <input type="text" ref={startRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                        </div>

                        <div className="space-y-1">
                            <lable>Internship duration</lable>
                            <input type="text" ref={durationRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full"></input>
                        </div>

                        <div className="space-y-1">
                            <label>About Internship</label>
                            <textarea type="text" ref={aboutInternshipRef} className="border rounded-md
                         border-gray-300 hover:border-sky-500 outline-none block w-full h-32 p-1" />
                        </div>

                        <div className="space-y-1">
                            <label>Intern’s responsibilities</label>
                            <textarea type="text" ref={responsibilityRef} placeholder="Selected intern's day-to-day responsibilities include:" className="border rounded-md
                         border-gray-300 hover:border-sky-500 outline-none block w-full h-32 p-1" />
                        </div>

                    </div>

                    <p className="text-lg font-semibold text-gray-700 ml-40 mt-10">Stipend and Perks</p>
                    <div className="border rounded-md border-gray-300 max-w-xl mx-auto mt-2 mb-5 p-5 space-y-3 text-gray-700 font-semibold">
                        <div className="space-y-1">
                            <label>Stipend</label>
                            <input type="text" ref={stipendRef} className="outline-none border border-gray-300 rounded-md p-2 block hover:border-sky-500 w-full" />
                        </div>

                        <div className="space-y-1">
                            <p >Perks</p>
                            <textarea type="text" ref={perksRef} className="border rounded-md
                      border-gray-300 hover:border-sky-500 outline-none block w-full h-16 p-2" />
                        </div>
                    </div>

                    {/* stipend */}
                    <p className="text-lg font-semibold text-gray-700 ml-40 mt-10">SKills</p>
                    <div className="border rounded-md border-gray-300 max-w-xl mx-auto mt-2 mb-5 text-gray-700 font-semibold">
                        <div className="p-5 space-y-3">
                            <div className="space-y-1">
                                <p>Skills required</p>
                                <textarea type="text" ref={skillsRef} placeholder="e.g. Javascript , Java" className="border rounded-md
                 border-gray-300 hover:border-sky-500 outline-none block w-full h-16 p-2" />
                            </div>

                            <div className="space-y-1">
                                <p>Who can apply</p>
                                <textarea type="text" ref={whoRef} placeholder="dtgdt" className="border rounded-md border-gray-300 hover:border-sky-500 outline-none block w-full h-32 p-2" />
                            </div>
                            <div className="space-y-1">
                                <p>Additional Information</p>
                                <textarea type="text" ref={addinfoRef} className="border rounded-md border-gray-300 hover:border-sky-500 outline-none block w-full h-24 p-2" />
                            </div>
                        </div>
                    </div>
                </form>



                {/* <button onClick={()=>{setModel(true) }}  */}
                <button onClick={createInternship} className="text-white mb-10 shadow-lg bg-sky-500 ml-[350px] hover:bg-sky-600 font-semibold text-lg text-center p-2 w-40 
            border rounded-md mt-6">
                    Post internship</button>


                {/* 
            {
                model ? (
                    <>
                      <div className="min-h-min max-w-screen-sm mx-auto mb-32 mt-24 border rounded-lg p-8 shadow-2xl">
            <div className="max-w-screen-lg mx-auto border rounded-md p-8 bg-green-100 flex justify-evenly shadow-lg">
           <img src="https://internshala.com/static/images/common/modal_success.svg" height={70} width={70}
            className="ml-12 justify-center" />
            <div>
                <p className="text-gray-700 font-semibold text-2xl mt-6">Your internship has been posted!</p>
            </div>
            </div>
            <div className="flex mt-20 space-x-3 ml-72">
                <Link href="/internships">
                <button className="text-sky-500  hover:text-sky-600  hover:border-sky-600 font-semibold text-xl">Go To Internship dashboard</button>
                </Link>
                <ArrowRightIcon className="text-sky-500 hover:text-sky-600 h-5 w-5 mt-2" />
            </div>

            <div>
             <img src="https://careerheight.in/wp-content/uploads/2021/08/join-our-team-concept_25147-48-1-8.webp"
              height={450} width={450} className="ml-16 mt-10 "/>
             </div>
             <button
                    className="text-sky-500 bg-white border border-sky-500 hover:border-sky-600 shadow-lg ml-[500px] mt-3 text-center font-semibold p-2 w-20"
                    onClick={() => setModel(false)} >
                    Close
                  </button>
        </div>
                    </>
                )
                : null

            }
 */}


                {/* </Link> */}
            </div>
        </>
    )
}

export default Post_internship