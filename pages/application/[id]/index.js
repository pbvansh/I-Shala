import axios from "axios";
// import Link from "next/link";
import JWT from 'jsonwebtoken'
import { useRouter } from "next/router";
import { useRef } from "react";
import Header from "../../../components/Header";
const Letter = () => {
    const router = useRouter()
    const internshipID = router.query.id;
    const coverRef = useRef();
    const availibilityRef = useRef();

    const createApplication = (e) => {
        e.preventDefault();
        console.log(coverRef.current.value, availibilityRef.current.value)
        const {id} = JWT.decode(localStorage.getItem('i_shala_token'))
        
        axios.post("http://localhost:5000/application/createapp", {
            Internship_id: internshipID,
            user_id : id,
            cover_letter: coverRef.current.value,
            Availability: availibilityRef.current.value
        }).then(()=>{
            router.push('/submit')
        })

    }


    return (
        <>
            <div className="min-h-screen mx-auto max-w-screen-lg">
              <Header title={'Internship Confirmation'}/>
                <div className='p-8 justify-center text-center text-4xl mt-0'>
                    <p className=' font-semibold text-gray-800'> Internship Confirmation</p>
                </div>
                <hr></hr>

                <div>
                    <p className="text-gray-800 text-2xl font-semibold mt-4">Cover letter</p>
                </div>
                <div>
                    <p className="text-gray-600 font-semibold mt-4">Why should you be hired for this role?</p>
                </div>
                <div className="mt-4 text-gray-800">
                    <textarea placeholder="Mention in detail what relevant skill or past experience you have for this internship.What excites you about this internship ? why would you be a good fit?"
                        ref={coverRef} className="p-3 border rounded-md border-sky-500 hover:border-sky-600 h-44 w-[1000px] outline-none"></textarea>
                </div>

                <div>
                    <p className="text-gray-700 font-semibold text-2xl mt-4">Your availability</p>
                    <p className="mt-4 text-gray-600 text-md font-semibold">Confirm your availability</p>

                </div>

                <div className="mt-4">
                    <div className="space-y-3">
                        <p className="text-grpay-600 text-base">Are you available for 6 months starting immediately for a full-time Internship ?</p>
                        <textarea ref={availibilityRef} className="p-3 border rounded-md border-sky-500 hover:border-sky-600 h-44 w-[1000px] outline-none"></textarea>

                    </div>

                    {/* <div className="flex space-x-3">
                        <input type="Radio" className="h-4 w-4" />
                        <p className="text-gray-600 text-base">No (Please specify your availability)</p>
                    </div> */}
                </div>

                {/* <div>
                    <p className="text-gray-700 text-2xl font-semibold mt-4">Assessment</p>
                    <p className="mt-4 text-gray-800 font-semibold">Q1. This role is strictly in-office and WFH is not possible at the moment. Are you willing to commute to the office in Vaishali,
                        Ghaziabad for the internship? Reply with yes/no.</p>
                    <textarea placeholder="Enter Text..." className="mt-4 p-3 text-gray-800 border rounded-md border-sky-500 hover:border-sky-600 h-44 w-[1000px] outline-none"></textarea>
                </div> */}

                {/* <div>
        <p className="mt-4 text-gray-800 font-semibold">Q2. Name at least 10 keywords in Python that you use in your daily practices</p>
        <textarea placeholder="Enter Text..." className="mt-4 p-3 text-gray-800 border rounded-md border-sky-500 hover:border-sky-600 h-44 w-[1000px] outline-none"></textarea>
       </div> */}
                <div className="flex justify-center mt-4 mb-10">
                    <button onClick={createApplication} className="text-white bg-sky-500 hover:bg-sky-600 p-3 w-32 border rounded-md shadow-lg font-semibold text-lg">Submit</button>
                </div>
            </div>
        </>
    );

}

export default Letter

