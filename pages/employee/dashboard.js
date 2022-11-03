import { BriefcaseIcon, DocumentReportIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import JWT from 'jsonwebtoken'

const Dashboard = () => {

    const [internship, setInternship] = useState([])
    useEffect(() => {
        const token = JWT.decode(localStorage.getItem('i_shala_token'))
        axios.get(`http://localhost:5000/company/${token.id}/internship`).then((res) => {
            console.log(res.data);
            setInternship(res.data)
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return (
        <>
            <div className="min-h-screen max-w-screen-md mx-auto">
                <div>
                    <p className="font-semibold text-4xl p-12 text-center text-gray-700">My Internships</p>
                </div>
                <section className="text-gray-600">
                    <div className="border border-gray-300 rounded-md shadow-xl ">
                        <div className="grid grid-cols-4 text-gray-500 font-semibold p-2 bg-gray-100">
                            <p className="text-center">PROFILE</p>
                            <p className="text-center">STATUS</p>
                            <p className="text-center">ACTION</p>
                            <p className="text-center">REVIEW INTERNSHIP</p>
                        </div>
                        <div>
                            {/* <div className="grid grid-cols-4 text-gray-500 font-semibold p-3 ">
                                <p>Web Development</p>
                                <div className="flex space-x-1 col-span-2">
                                    <p className="text-sky-500 bg-sky-50 font-semibold text-base border border-sky-100 rounded-full w-28 text-center">Applied</p>
                                    <QuestionMarkCircleIcon className="h-5 w-5 text-sky-500" />
                                </div>
                                <Link href="/review_internship">
                                    <DocumentReportIcon className="h-6 w-6 text-sky-500 cursor-pointer hover:text-sky-600" />
                                </Link>
                            </div> */}
                            {
                                internship.map((inter, i) => (
                                    <div key={i} className="grid grid-cols-4 text-gray-500 font-semibold p-3 ">
                                        <p className="text-center">{inter.Internship_Name}</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className="text-sky-500 bg-sky-50 font-semibold text-base border
                                             border-sky-100 rounded-full w-28 text-center">Applied</p>
                                            <QuestionMarkCircleIcon className="h-5 w-5 text-sky-500" />
                                        </div>
                                        <Link href={`/employee/action?Internship_id=${inter._id}`}>
                                            <BriefcaseIcon className="h-5 w-5 text-sky-500 cursor-pointer mx-auto text-center" />
                                        </Link>
                                        <Link href={{
                                            pathname: '/employee/review_internship',
                                            query: {
                                                Internship_Name: inter.Internship_Name,
                                                company_name: inter.company_id.Name,
                                                Location: inter.Location,
                                                start_date: inter.start_date,
                                                Duration: inter.Duration,
                                                Stipend: inter.Stipend,
                                                TotalNoOfApplicants: 10,
                                                About_company: inter.company_id.About_company,
                                                About_internship: inter.About_internship,
                                                RequiredSkills: inter.RequiredSkills,
                                                whocanapply: inter.whocanapply,
                                                Additional_information: inter.Additional_information,
                                                NoOfOpening: inter.NoOfOpening,
                                                perks: inter.perks,
                                            }
                                        }}>
                                            <DocumentReportIcon className="h-6 w-6  ml-10 text-sky-500 cursor-pointer hover:text-sky-600"/>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Dashboard