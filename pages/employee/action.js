import { DocumentReportIcon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Action = () => {

  const route = useRouter();
  
  const [applicants, setApplicants] = useState([])
  useEffect(() => {
    const  Internship_id  = route.query.Internship_id;
    console.log(Internship_id);
    axios.get(`http://localhost:5000/company/${Internship_id}/applicants`).then((res) => {
      console.log(res.data);
      setApplicants(res.data)
    })
  }, [])

  return (
    <>
      <div className="min-h-screen max-w-screen-xl mx-auto">
        <div>
          <p className="font-semibold text-4xl p-12 text-center text-gray-700">Details of applicants</p>
        </div>

        <div className="border border-gray-300 rounded-md shadow-xl ">
          <div className="grid grid-cols-5 text-gray-500 font-semibold  p-3  bg-gray-200 gap-5">
            <p>NO.</p>
            <p>STUDENT NAME</p>
            <p>APPLIED ON</p>
            <p>COVER LETTER</p>
            <p>STATUS</p>
          </div>
          {
            applicants.map((cand, i) => (
              <div key={i}className="grid grid-cols-5 text-gray-700 p-3 gap-5">
                <p>{i + 1}</p>
                <p>{cand.user_id.firstName}</p>
                <p>{cand.createdAt.split('T')[0]}</p>
                <Link href={`/application/view/${cand._id}`}>
                    <DocumentReportIcon className="h-6 w-6 text-sky-500 cursor-pointer hover:text-sky-600" />
                </Link>
                <p className="text-sky-500 bg-sky-50 font-semibold text-base border border-sky-100 rounded-full w-28 text-center">{cand.application_status}</p>
              </div>
            ))
          }
          <div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Action