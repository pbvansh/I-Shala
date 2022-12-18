import { DocumentReportIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { applicationIdForUpdateOrderState, applicationStatusState } from "../atom/applicationAtom"


const Applicant = ({ cand, i, setshowStatusModal }) => {
    // const [Internship_id, setInternship_id] = useState(null);
    // useEffect(() => {
    //     setInternship_id(cand._id);
    // }, [])
    const [applicationID, setApplicationID] = useRecoilState(applicationIdForUpdateOrderState)
    const [Status, setStatus] = useRecoilState(applicationStatusState);
  
    return (
        <div className="grid grid-cols-6 text-gray-700 p-3 gap-5">
            <p>{i + 1}</p>
            <p>{cand.user_id?.firstName}</p>
            <p>{cand.createdAt.split('T')[0]}</p>
            <Link href={`/application/view/${cand?._id}?user_id=${cand.user_id._id}`}>
                <DocumentReportIcon className="h-6 w-6 text-sky-500 cursor-pointer hover:text-sky-600" />
            </Link>
            <p className="text-sky-500 bg-sky-50 font-semibold text-base border
             border-sky-100 rounded-full w-20 justify-center text-center">{cand.application_status}</p>
            <button className="border rounded-full shadow-lg p-1 w-20 border-gray-200 cursor-pointer text-gray-600 hover:text-sky-600 font-semibold hover:border-sky-600"
                onClick={() => { 
                                 setStatus(cand.application_status)
                                 setApplicationID([cand._id])
                                 setshowStatusModal(true);
                                 }}
            >
                View
            </button>
        </div>
    )
}

export default Applicant