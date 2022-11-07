import { QuestionMarkCircleIcon, DocumentReportIcon } from "@heroicons/react/outline"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Application = ({ app }) => {
    const [applicants,setApplicants] = useState(0)
    useEffect(()=>{
        axios.get(`http://localhost:5000/application/${app.Internship_id._id}/totalApplicant`).then((res)=>{
         setApplicants(res.data)
        })
     },[])
    return (
        <>
            <div className="grid grid-cols-9 p-4">
                <p>{app.Internship_id?.company_id?.Name}</p>
                <div className="flex flex-row col-span-2 justify-between pr-14">
                    <p>{app.Internship_id?.Internship_Name}</p>
                    <Link href={`/internship/${app.Internship_id._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5 text-sky-500 hover:text-sky-600 cursor-pointer inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>
                </div>
                <p>{app.createdAt.split('T')[0]}</p>
                <p>{applicants}</p>
                <div className="flex space-x-1 col-span-2">
                    <p className="text-sky-500 bg-sky-50 font-semibold text-base border border-sky-100 rounded-full w-28 text-center">{app.application_status}</p>
                    <QuestionMarkCircleIcon className="h-5 w-5 text-sky-500" />
                </div>
                <Link href={`../application/view/${app._id}`}>
                    <DocumentReportIcon className="h-6 w-6 text-sky-500 cursor-pointer hover:text-sky-600" />
                </Link>
            </div>
        </>
    );
}

export default Application