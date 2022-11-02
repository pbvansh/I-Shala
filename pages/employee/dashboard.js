import { DocumentReportIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import JWT from 'jsonwebtoken'

const Dashboard = () => {

    const [internship, setInternship] = useState([])
    useEffect(() => {
        const token = JWT.decode(localStorage.getItem('i_shala_token'))
        token && axios.get(`http://localhost:5000/internship/${token.id.}`).then((res) => {
            console.log(res.data);
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
                            <p>PROFILE</p>
                            <p>STATUS</p>
                            <p>ACTION</p>
                            <p>REVIEW INTERNSHIP</p>

                        </div>
                        <div>
                            <div className="grid grid-cols-4 text-gray-500 font-semibold p-3 ">
                                <p>Web Development</p>
                                <div className="flex space-x-1 col-span-2">
                                    <p className="text-sky-500 bg-sky-50 font-semibold text-base border border-sky-100 rounded-full w-28 text-center">Applied</p>
                                    <QuestionMarkCircleIcon className="h-5 w-5 text-sky-500" />
                                </div>
                                <Link href="/review_internship">
                                    <DocumentReportIcon className="h-6 w-6 text-sky-500 cursor-pointer hover:text-sky-600" />
                                </Link>
                                {/* <p>ACTION</p> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Dashboard