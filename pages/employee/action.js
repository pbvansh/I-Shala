import { DocumentReportIcon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Applicant from "../../components/Applicant";

const Action = () => {

  const route = useRouter();
  const [applicants, setApplicants] = useState([])
  useEffect(() => {
    const Internship_id = route.query.Internship_id;
    axios.get(`http://localhost:5000/company/${Internship_id}/applicants`).then((res) => {
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
          <div className="grid grid-cols-6 text-gray-500 font-semibold  p-3  bg-gray-200 gap-5">
            <p>NO.</p>
            <p>STUDENT NAME</p>
            <p>APPLIED ON</p>
            <p>COVER LETTER</p>
            <p>STATUS</p>
            <p>ACTION</p>
          </div>
          {
            applicants.map((cand, i) => (
              <Applicant key={i} cand={cand} i={i} />
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